import * as RegularIcons from '@fortawesome/free-regular-svg-icons';
import * as SolidIcons from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IServiceRepositoryItem, IReactronComponentContext, IModuleRepositoryItem } from '@schirkan/reactron-interfaces';
import * as React from 'react';
import Loading from '../Loading/Loading';
import OptionCard from '../OptionCard/OptionCard';
import UiButton from '../UiButton/UiButton';
import UiCard from '../UiCard/UiCard';
import UiCardButtonRow from '../UiCardButtonRow/UiCardButtonRow';
import UiCardContent from '../UiCardContent/UiCardContent';
import UiCardTitle from '../UiCardTitle/UiCardTitle';
import UiFlowLayout from '../UiFlowLayout/UiFlowLayout';
import UiLoadingCard from '../UiLoadingCard/UiLoadingCard';
import UiOverlay from '../UiOverlay/UiOverlay';
import ServiceGroupCard from './ServiceGroupCard/ServiceGroupCard';
import ServiceLogCard from './ServiceLogCard/ServiceLogCard';
import { AdminPageContext } from '../AdminPageContext';

import './ServiceManagerPage.scss';

export interface IModuleManagerPageState {
  loadingServices: boolean;
  loadingServiceOptions: boolean;
  services: IServiceRepositoryItem[];
  modules: IModuleRepositoryItem[];
  showOptions: boolean,
  showLog: boolean,
  showDetails: boolean,
  selectedService: IServiceRepositoryItem | undefined;
  selectedServiceOptions: any;
}

export default class ServiceManagerPage extends React.Component<any, IModuleManagerPageState> {
  public static contextType = AdminPageContext;
  public context: IReactronComponentContext;

  constructor(props: any) {
    super(props);

    this.state = {
      loadingServices: true,
      loadingServiceOptions: false,
      services: [],
      modules: [],
      showOptions: false,
      showLog: false,
      showDetails: false,
      selectedService: undefined,
      selectedServiceOptions: undefined
    };

    this.showDetails = this.showDetails.bind(this);
    this.closeDetails = this.closeDetails.bind(this);
    this.showLog = this.showLog.bind(this);
    this.closeLog = this.closeLog.bind(this);
    this.showOptions = this.showOptions.bind(this);
    this.closeOptions = this.closeOptions.bind(this);
    this.loadOptions = this.loadOptions.bind(this);
    this.saveOptions = this.saveOptions.bind(this);
    this.optionsChange = this.optionsChange.bind(this);
  }

  public componentDidMount() {
    this.loadServices();
  }

  public async loadServices() {
    const services = await this.context.services.services.getAllServices();
    const modules = await this.context.services.modules.getAll();
    this.setState({ modules, services, loadingServices: false });
    //  .catch(err => this.setState({ loadingServices: false })); // TODO
  }

  private showDetails(service: IServiceRepositoryItem) {
    this.setState({ showDetails: true, selectedService: service });
  }

  private showLog() {
    this.setState({ showLog: true });
  }

  private showOptions() {
    this.setState({ showOptions: true, selectedServiceOptions: undefined }, this.loadOptions);
  }

  private closeDetails() {
    this.setState({ showDetails: false, selectedService: undefined });
  }

  private closeOptions() {
    this.setState({ showOptions: false, showDetails: true });
  }

  private closeLog() {
    this.setState({ showLog: false, showDetails: true });
  }

  private loadOptions() {
    if (!this.state.selectedService) {
      return;
    }

    this.setState({ loadingServiceOptions: true });

    this.context.services.services.getServiceOptions(this.state.selectedService.moduleName, this.state.selectedService.name)
      .then(options => this.setState({ selectedServiceOptions: options, loadingServiceOptions: false }));
  }

  private optionsChange(newOptions: any) {
    this.setState({ selectedServiceOptions: newOptions })
  }

  private saveOptions(newOptions: any) {
    if (!this.state.selectedService) {
      return;
    }

    this.context.services.services.setServiceOptions(this.state.selectedService.moduleName, this.state.selectedService.name, newOptions)
      .then(() => this.closeOptions());
  }

  private renderServiceOptionsDialog() {
    if (!this.state.showOptions || !this.state.selectedService) {
      return null;
    }
    if (this.state.loadingServiceOptions) {
      return <UiOverlay><UiLoadingCard /></UiOverlay>;
    }

    const title = 'Options for ' + this.state.selectedService.displayName;

    return (
      <UiOverlay>
        <OptionCard icon={SolidIcons.faCog} showReset={true}
          title={title} fields={this.state.selectedService.fields || []}
          options={this.state.selectedServiceOptions}
          onSave={this.saveOptions} onCancel={this.closeOptions}
        />
      </UiOverlay>
    );
  }

  private renderServiceLogDialog() {
    if (!this.state.showLog || !this.state.selectedService) {
      return null;
    }

    return (
      <UiOverlay>
        <ServiceLogCard service={this.state.selectedService} onClose={this.closeLog} />
      </UiOverlay>
    );
  }

  private renderServiceDetailsDialog() {
    if (!this.state.showDetails || !this.state.selectedService) {
      return null;
    }

    const hasOptions = this.state.selectedService.fields && this.state.selectedService.fields.length;

    return (
      <UiOverlay>
        <UiCard className="ServiceDetailsCard">
          <UiCardTitle>
            <FontAwesomeIcon icon={SolidIcons.faCogs} /> {this.state.selectedService.displayName}
          </UiCardTitle>
          <UiCardContent>
            {this.state.selectedService.description}
          </UiCardContent>
          <UiCardButtonRow divider="half">
            <UiButton onClick={this.closeDetails}>
              <FontAwesomeIcon icon={SolidIcons.faTimes} /> Close
            </UiButton>
            <UiButton onClick={this.showLog}>
              <FontAwesomeIcon icon={RegularIcons.faFile} /> Log
            </UiButton>
            <UiButton onClick={this.showOptions} disabled={!hasOptions}>
              <FontAwesomeIcon icon={SolidIcons.faCog} /> Options
            </UiButton>
          </UiCardButtonRow>
        </UiCard>
      </UiOverlay>
    );
  }

  private renderServiceGroups() {
    if (this.state.loadingServices) {
      return <Loading center={true} />;
    }

    const groups = this.state.services.map(x => x.moduleName).filter(onlyUnique);

    const groupCards = groups.map(moduleName => {
      const services = this.state.services.filter(x => x.moduleName === moduleName); // TODO: .sort((a, b) => a.displayName > b.displayName)
      const module = this.state.modules.find(x => x.name === moduleName);
      const moduleDisplayName = module && module.displayName || moduleName;

      return <ServiceGroupCard key={moduleName} moduleDisplayName={moduleDisplayName} services={services} onShowDetails={this.showDetails} />;
    });

    return <UiFlowLayout>{groupCards}</UiFlowLayout>;
  }

  public render() {
    return (
      <section className="ServiceManagerPage">
        {this.renderServiceGroups()}
        {this.renderServiceOptionsDialog()}
        {this.renderServiceLogDialog()}
        {this.renderServiceDetailsDialog()}
      </section>
    );
  }
}

function onlyUnique(value: any, index: number, self: any[]) {
  return self.indexOf(value) === index;
}