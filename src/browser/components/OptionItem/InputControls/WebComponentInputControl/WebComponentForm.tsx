import * as RegularIcons from '@fortawesome/free-regular-svg-icons';
import * as SolidIcons from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IInputComponentProps, IReactronComponentContext, IReactronComponentDefinition, IWebComponentOptions } from '@schirkan/reactron-interfaces';
import { Guid } from 'guid-typescript';
import * as React from 'react';
import { getDefaultObjectValue } from 'src/common/optionsHelper';
import { AdminPageContext } from '../../../AdminPageContext';
import { OptionCardContext, OptionsCardContextData } from '../../../OptionCard/OptionCardContext';
import OptionList from '../../../OptionList/OptionList';
import UiButton from '../../../UiButton/UiButton';
import { WebComponentFormContext, WebComponentFormContextData } from './OptionItemContext';

import './WebComponentForm.scss';

interface IReactronComponentDefinitionItem {
  key: string;
  moduleName: string;
  definition: IReactronComponentDefinition;
}

interface IWebComponentFormState {
  loadingWebComponents: boolean
  loadingComponentDefinitions: boolean
  webComponents: IWebComponentOptions[];
  componentDefinitions: IReactronComponentDefinitionItem[];
  selectedComponentDefinition?: IReactronComponentDefinitionItem;
  selectedWebComponentOptions?: IWebComponentOptions;
}

export default class WebComponentForm extends React.Component<IInputComponentProps, IWebComponentFormState> {
  public static contextType = OptionCardContext;
  public context: OptionsCardContextData;
  public adminPageContext: IReactronComponentContext;
  public optionItemContext: WebComponentFormContextData;

  constructor(props: IInputComponentProps) {
    super(props);

    this.state = {
      loadingWebComponents: true,
      loadingComponentDefinitions: true,
      webComponents: [],
      componentDefinitions: []
    };

    this.initCurrentComponent = this.initCurrentComponent.bind(this);
    this.onOptionsChange = this.onOptionsChange.bind(this);
    this.removeWebComponent = this.removeWebComponent.bind(this);
    this.onSelectedComponentDefinitionChange = this.onSelectedComponentDefinitionChange.bind(this);
  }

  private get formEvents(): OptionsCardContextData {
    return this.context as OptionsCardContextData;
  }

  public componentDidMount() {
    this.loadComponentDefinitions();
    this.loadWebComponents();
  }

  // public componentDidUpdate(prevProps: IInputComponentProps) {
  //   if (prevProps.value !== this.props.value) {
  //     this.initCurrentComponent();
  //   }
  // }

  public componentWillUnmount() {
    if (this.state.selectedWebComponentOptions) {
      this.formEvents.webComponentRemoved(this.state.selectedWebComponentOptions);
    }
  }

  private async loadComponentDefinitions() {
    try {
      const result = await this.adminPageContext.componentLoader.getAllComponents();
      const componentDefinitions: IReactronComponentDefinitionItem[] = [];
      Object.keys(result).forEach(moduleName => {
        const components = result[moduleName];
        components.forEach(definition => {
          const key = moduleName + '.' + definition.name;
          componentDefinitions.push({ moduleName, definition, key });
        });
      });
      this.setState({ componentDefinitions, loadingComponentDefinitions: false }, this.initCurrentComponent);
    }
    catch (err) {
      return console.log(err);
    } // TODO
  }

  private async loadWebComponents() {
    try {
      const webComponents = await this.adminPageContext.services.components.getWebComponentOptions();
      this.setState({ webComponents, loadingWebComponents: false }, this.initCurrentComponent);
    }
    catch (err) {
      return console.log(err);
    } // TODO
  }

  private initCurrentComponent() {
    if (this.state.loadingWebComponents || this.state.loadingComponentDefinitions) {
      return;
    }

    if (this.props.value) {
      const selectedWebComponentOptions = this.state.webComponents.find(x => x.id === this.props.value);
      if (selectedWebComponentOptions) {
        const key = selectedWebComponentOptions.moduleName + '.' + selectedWebComponentOptions.componentName;
        const selectedComponentDefinition = this.state.componentDefinitions.find(x => x.key === key);
        if (selectedComponentDefinition) {
          this.setState({ selectedComponentDefinition, selectedWebComponentOptions });
        }
      }
    }
  }

  private onSelectedComponentDefinitionChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const newKey = e.currentTarget.value;

    const selectedComponentDefinition = this.state.componentDefinitions.find(x => x.key === newKey);
    const currentWebComponentOptions = this.state.selectedWebComponentOptions;
    let newWebComponentOptions: IWebComponentOptions | undefined;

    if (selectedComponentDefinition) {
      const id = currentWebComponentOptions && currentWebComponentOptions.id ||
        selectedComponentDefinition.definition.name + '_' + Guid.raw();

      newWebComponentOptions = {
        id,
        parentId: this.optionItemContext.parentComponent && this.optionItemContext.parentComponent.id,
        moduleName: selectedComponentDefinition.moduleName,
        componentName: selectedComponentDefinition.definition.name,
        options: getDefaultObjectValue(selectedComponentDefinition.definition.fields)
      };
    }

    // trigger id change
    const newId = newWebComponentOptions && newWebComponentOptions.id;
    if (this.props.value !== newId) {
      this.props.valueChange(this.props.definition, newId);

      if (newWebComponentOptions) {
        // notify component created
        this.formEvents.webComponentCreated(newWebComponentOptions);
      } else if (currentWebComponentOptions) {
        // notify component remove
        this.formEvents.webComponentRemoved(currentWebComponentOptions);
      }
    }

    this.setState({ selectedWebComponentOptions: newWebComponentOptions, selectedComponentDefinition });
  }

  private removeWebComponent() {
    if (this.state.selectedWebComponentOptions) {
      // notify component remove
      this.formEvents.webComponentRemoved(this.state.selectedWebComponentOptions);
      this.props.valueChange(this.props.definition, undefined);
      this.setState({ selectedWebComponentOptions: undefined, selectedComponentDefinition: undefined });
    }
  }

  private onOptionsChange(newOptions: any) {
    if (!this.state.selectedWebComponentOptions) {
      return;
    }
    const newWebComponentOptions: IWebComponentOptions = { ...this.state.selectedWebComponentOptions };
    newWebComponentOptions.options = newOptions;
    this.setState({ selectedWebComponentOptions: newWebComponentOptions });

    // notify component changed
    this.formEvents.webComponentChanged(newWebComponentOptions);
  }

  public renderComponentSelection() {
    if (this.state.loadingWebComponents || this.state.loadingComponentDefinitions) {
      return null;
    }

    const selectedComponentKey = this.state.selectedComponentDefinition && this.state.selectedComponentDefinition.key || '';

    if (this.state.selectedComponentDefinition) {
      return (
        <div className="componentTitle">
          <UiButton>
            <FontAwesomeIcon icon={SolidIcons.faCube} />
          </UiButton>
          <label>
            {this.props.definition.displayName}: {this.state.selectedComponentDefinition.definition.displayName} ({this.state.selectedComponentDefinition.moduleName})
          </label>
          <UiButton onClick={this.removeWebComponent}>
            <FontAwesomeIcon icon={RegularIcons.faTrashAlt} />
          </UiButton>
        </div>
      );
    }

    let types = this.state.componentDefinitions.map(x => x.definition.type);
    types = types.filter((v, i, a) => a.indexOf(v) === i);

    const optionGroups: { [type: string]: IReactronComponentDefinitionItem[] } = {};
    this.state.componentDefinitions
      .filter(x => x.definition.type !== 'admin-input' && x.definition.type !== 'internal')
      .forEach(item => {
        const type = item.definition.type || 'content';
        if (!optionGroups[type]) {
          optionGroups[type] = [];
        }
        optionGroups[type].push(item);
      });

    return (
      <div className="componentSelect">
        <UiButton>
          <FontAwesomeIcon icon={SolidIcons.faCube} />
        </UiButton>
        <label htmlFor={this.props.uniqueId}>{this.props.definition.displayName}</label>
        <select className="componentSelect" id={this.props.uniqueId} value={selectedComponentKey} onChange={this.onSelectedComponentDefinitionChange}>
          <option key="_" value="">Select Component...</option>
          {Object.keys(optionGroups).map(type =>
            <optgroup key={type} label={type}>
              {optionGroups[type].map(item =>
                <option key={item.key} value={item.key}>{item.definition.displayName} ({item.moduleName})</option>
              )}
            </optgroup>
          )}
        </select>
      </div>
    );
  }

  private renderComponentForm() {
    if (!this.state.selectedWebComponentOptions || !this.state.selectedComponentDefinition) {
      return null;
    }

    return (
      <WebComponentFormContext.Provider value={{ parentComponent: this.state.selectedWebComponentOptions }}>
        <OptionList value={this.state.selectedWebComponentOptions.options}
          fields={this.state.selectedComponentDefinition.definition.fields}
          valueChange={this.onOptionsChange} />
      </WebComponentFormContext.Provider>
    );
  }

  public render() {
    return (
      <div className="WebComponentForm">
        <AdminPageContext.Consumer>{value => (this.adminPageContext = value) && null}</AdminPageContext.Consumer>
        <WebComponentFormContext.Consumer>{value => (this.optionItemContext = value) && null}</WebComponentFormContext.Consumer>
        {this.renderComponentSelection()}
        {this.renderComponentForm()}
      </div>
    );
  }
}
