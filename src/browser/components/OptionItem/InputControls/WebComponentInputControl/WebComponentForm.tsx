import * as RegularIcons from '@fortawesome/free-regular-svg-icons';
import * as SolidIcons from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IInputComponentProps, IWebComponentOptions } from '@schirkan/reactron-interfaces';
import { Guid } from 'guid-typescript';
import * as React from 'react';
import { getDefaultObjectValue } from 'src/common/optionsHelper';
import { OptionCardContext, OptionsCardContextData, IReactronComponentDefinitionItem } from '../../../OptionCard/OptionCardContext';
import OptionList from '../../../OptionList/OptionList';
import UiButton from '../../../UiButton/UiButton';
import { WebComponentFormContext, WebComponentFormContextData } from './WebComponentFormContext';

import './WebComponentForm.scss';

interface IWebComponentFormState {
  selectedComponentDefinition?: IReactronComponentDefinitionItem;
  selectedWebComponentOptions?: IWebComponentOptions;
}

export default class WebComponentForm extends React.Component<IInputComponentProps, IWebComponentFormState> {
  public static contextType = OptionCardContext;
  public context: OptionsCardContextData;
  public webComponentFormContext: WebComponentFormContextData;

  constructor(props: IInputComponentProps) {
    super(props);

    this.state = {};

    this.onOptionsChange = this.onOptionsChange.bind(this);
    this.removeWebComponent = this.removeWebComponent.bind(this);
    this.cutWebComponent = this.cutWebComponent.bind(this);
    this.onContextComponentsChange = this.onContextComponentsChange.bind(this);
    this.onSelectedComponentDefinitionChange = this.onSelectedComponentDefinitionChange.bind(this);
  }

  private onContextComponentsChange() {
    if (!this.state.selectedWebComponentOptions) {
      this.forceUpdate();
    }
  }

  public componentDidMount() {
    this.initCurrentComponent();
    this.context.onChange.subscribe(this.onContextComponentsChange);
  }

  public componentDidUpdate(prevProps: IInputComponentProps) {
    if (prevProps.value !== this.props.value) {
      this.initCurrentComponent();
    }
  }

  public componentWillUnmount() {
    this.context.onChange.unsubscribe(this.onContextComponentsChange);
  }

  private initCurrentComponent() {
    if (this.props.value) {
      const selectedWebComponentOptions = this.context.getAllComponents().find(x => x.id === this.props.value);
      if (selectedWebComponentOptions) {
        const key = selectedWebComponentOptions.moduleName + '.' + selectedWebComponentOptions.componentName;
        const selectedComponentDefinition = this.context.componentDefinitions.find(x => x.key === key);
        if (selectedComponentDefinition) {
          this.setState({ selectedComponentDefinition, selectedWebComponentOptions });
        }
      }
    }
  }

  private onSelectedComponentDefinitionChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const newKey = e.currentTarget.value;

    const selectedComponentDefinition = this.context.componentDefinitions.find(x => x.key === newKey);

    if (!selectedComponentDefinition) {
      const existingComponent = this.context.getClipBoardComponents().find(x => x.id === newKey);
      if (existingComponent) {
        // update parentId for existing component
        existingComponent.parentId = this.webComponentFormContext.getParentId();
        // notify component changed
        this.context.webComponentChanged(existingComponent);
        // use existing component
        this.props.valueChange(this.props.definition, newKey);
      }
      return;
    }

    const currentWebComponentOptions = this.state.selectedWebComponentOptions;
    let newWebComponentOptions: IWebComponentOptions | undefined;

    if (selectedComponentDefinition) {
      const id = currentWebComponentOptions && currentWebComponentOptions.id ||
        selectedComponentDefinition.definition.name + '_' + Guid.raw();

      newWebComponentOptions = {
        id,
        parentId: this.webComponentFormContext.getParentId(),
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
        this.context.webComponentCreated(newWebComponentOptions);
      } else if (currentWebComponentOptions) {
        // notify component remove
        this.context.webComponentRemoved(currentWebComponentOptions);
      }
    }

    this.setState({ selectedWebComponentOptions: newWebComponentOptions, selectedComponentDefinition });
  }

  private cutWebComponent() {
    if (this.state.selectedWebComponentOptions) {
      // notify component cut
      const cutComponent = this.state.selectedWebComponentOptions;
      cutComponent.parentId = '';
      this.context.webComponentChanged(cutComponent);

      this.props.valueChange(this.props.definition, undefined);
      this.setState({ selectedWebComponentOptions: undefined, selectedComponentDefinition: undefined });
    }
  }

  private removeWebComponent() {
    if (this.state.selectedWebComponentOptions) {
      // notify component remove
      this.context.webComponentRemoved(this.state.selectedWebComponentOptions);
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
    this.context.webComponentChanged(newWebComponentOptions);
  }

  public renderComponentSelection() {
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
          <UiButton onClick={this.cutWebComponent}>
            <FontAwesomeIcon icon={SolidIcons.faExternalLinkAlt} />
          </UiButton>
          <UiButton onClick={this.removeWebComponent}>
            <FontAwesomeIcon icon={RegularIcons.faTrashAlt} />
          </UiButton>
        </div>
      );
    }

    const optionGroups: { [type: string]: IReactronComponentDefinitionItem[] } = {};
    this.context.componentDefinitions
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
        <select id={this.props.uniqueId} value={selectedComponentKey} onChange={this.onSelectedComponentDefinitionChange}>
          <option value="">Select Component...</option>
          <optgroup label="Clipboard">
            {this.context.getClipBoardComponents().map(item => (
              <option key={item.id} value={item.id}>{item.componentName} ({item.moduleName})</option>
            ))}
          </optgroup>
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
      <WebComponentFormContext.Provider value={new WebComponentFormContextData(this.state.selectedWebComponentOptions, this.webComponentFormContext.parentPage)}>
        <OptionList value={this.state.selectedWebComponentOptions.options}
          fields={this.state.selectedComponentDefinition.definition.fields}
          valueChange={this.onOptionsChange} />
      </WebComponentFormContext.Provider>
    );
  }

  public render() {
    return (
      <div className="WebComponentForm">
        <WebComponentFormContext.Consumer>{value => (this.webComponentFormContext = value) && null}</WebComponentFormContext.Consumer>
        {this.renderComponentSelection()}
        {this.renderComponentForm()}
      </div>
    );
  }
}
