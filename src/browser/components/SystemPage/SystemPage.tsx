import * as SvgIcons from '@fortawesome/free-solid-svg-icons';
import * as FontAwesome from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { IServerInfo } from 'src/common/interfaces/IServerInfo';
import { confirm } from '../confirmDialog';
import UiButton from '../UiButton/UiButton';
import UiCard from '../UiCard/UiCard';
import UiCardButtonRow from '../UiCardButtonRow/UiCardButtonRow';
import UiCardContent from '../UiCardContent/UiCardContent';
import UiCardTitle from '../UiCardTitle/UiCardTitle';
import UiFlowLayout from '../UiFlowLayout/UiFlowLayout';
import { AdminPageContext } from '../AdminPageContext';
import { IReactronComponentContext } from '@schirkan/reactron-interfaces';

import './SystemPage.scss';

interface ISystemPageState {
  info?: IServerInfo;
}

export default class SystemPage extends React.Component<any, ISystemPageState> {
  public static contextType = AdminPageContext;
  public context: IReactronComponentContext;

  constructor(props: any) {
    super(props);
    this.state = {};

    this.exitApplication = this.exitApplication.bind(this);
    this.restartApplication = this.restartApplication.bind(this);
    this.shutdownSystem = this.shutdownSystem.bind(this);
    this.rebootSystem = this.rebootSystem.bind(this);
    this.resetApplication = this.resetApplication.bind(this);
  }

  public componentDidMount() {
    this.context.services.application.getServerInfo().then(info => this.setState({ info }));
  }

  // TODO: confirm dialog

  private exitApplication() {
    return this.context.services.application.exitApplication();
  }

  private restartApplication() {
    return this.context.services.application.restartApplication();
  }

  private shutdownSystem() {
    return this.context.services.application.shutdownSystem();
  }

  private rebootSystem() {
    return this.context.services.application.rebootSystem();
  }

  private resetApplication() {
    return this.context.services.application.resetApplication();
  }

  private renderLoadingDots() {
    return <span className="loadingDots" />;
  }

  private renderApplicationCard() {
    return (
      <UiCard>
        <UiCardTitle>Application</UiCardTitle>
        <UiCardContent>
          <div className="infoRow">
              <span>Version</span>
              <span>{this.state.info ? this.state.info.version : this.renderLoadingDots()}</span>
          </div>
        </UiCardContent>
        <UiCardButtonRow divider="half">
          <UiButton onClick={this.exitApplication}>
            <FontAwesome.FontAwesomeIcon icon={SvgIcons.faSignOutAlt} /> Exit
          </UiButton>
          <UiButton onClick={this.restartApplication}>
            <FontAwesome.FontAwesomeIcon icon={SvgIcons.faRedo} /> Restart
          </UiButton>
        </UiCardButtonRow>
      </UiCard>
    );
  }

  private renderSystemCard() {
    const free = this.state.info ? Math.round(this.state.info.memory.free / 1024 / 1024) : 0;
    const total = this.state.info ? Math.round(this.state.info.memory.total / 1024 / 1024) : 0;
    const memInfo = this.state.info ? (free + 'MB / ' + total + 'MB') : '';
    const cpuInfo = this.state.info ? (this.state.info.cpu.count + 'x' + this.state.info.cpu.speed + 'MHz') : '';

    return (
      <UiCard>
        <UiCardTitle>System</UiCardTitle>
        <UiCardContent>
          <div className="infoRow">
            <span>CPU</span>
            <span>{this.state.info ? cpuInfo : this.renderLoadingDots()}</span>
          </div>
          <div className="infoRow">
            <span>Memory</span>
            <span>{this.state.info ? memInfo : this.renderLoadingDots()}</span>
          </div>
          <div className="infoRow">
            <span>IP</span>
            <span>{this.state.info ? this.state.info.ip : this.renderLoadingDots()}</span>
          </div>
          <div className="infoRow">
            <span>Hostname</span>
            <span>{this.state.info ? this.state.info.hostname : this.renderLoadingDots()}</span>
          </div>
        </UiCardContent>
        <UiCardButtonRow divider="half">
          <UiButton onClick={this.shutdownSystem}>
            <FontAwesome.FontAwesomeIcon icon={SvgIcons.faPowerOff} /> Shutdown
          </UiButton>
          <UiButton onClick={this.rebootSystem}>
            <FontAwesome.FontAwesomeIcon icon={SvgIcons.faRedo} /> Reboot
          </UiButton>
        </UiCardButtonRow>
      </UiCard>
    );
  }

  private renderDangerCard() {
    return (
      <UiCard className="danger">
        <UiCardTitle>Danger Zone</UiCardTitle>
        <UiCardButtonRow>
          <UiButton onClick={confirm(this.resetApplication, 'Reset?')}>
            <FontAwesome.FontAwesomeIcon icon={SvgIcons.faExclamationTriangle} /> Reset Application
          </UiButton>
        </UiCardButtonRow>
      </UiCard>
    );
  }

  public render() {
    return (
      <section className="SystemPage">
        <UiFlowLayout>
          {this.renderApplicationCard()}
          {this.renderSystemCard()}
          {this.renderDangerCard()}
        </UiFlowLayout>
      </section>
    );
  }
}
