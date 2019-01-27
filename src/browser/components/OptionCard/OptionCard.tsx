import { IconProp } from "@fortawesome/fontawesome-svg-core";
import * as RegularIcons from '@fortawesome/free-regular-svg-icons';
import * as SolidIcons from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IFieldDefinition, IReactronComponentContext } from "@schirkan/reactron-interfaces";
import * as React from 'react';
import { getDefaultFieldValue } from "src/common/optionsHelper";
import OptionList from '../OptionList/OptionList';
import UiButton from '../UiButton/UiButton';
import UiCard from '../UiCard/UiCard';
import UiCardButtonRow from '../UiCardButtonRow/UiCardButtonRow';
import UiCardTitle from '../UiCardTitle/UiCardTitle';
import { OptionCardContext, OptionsCardContextData } from './OptionCardContext';
import { AdminPageContext } from "../AdminPageContext";

import './OptionCard.scss';

export interface IOptionCardProps {
  className?: string;
  icon: IconProp;
  title: string;
  options: object;
  fields: IFieldDefinition[];
  onSave: (newOptions: object) => any;
  onCancel?: () => any;
  showReset?: boolean;
  showToggleStyleOptions?: boolean;
}

interface IOptionCardState {
  newOptions: any;
  formContext?: OptionsCardContextData;
  showDebug: boolean;
  showExpertOptions: boolean;
}

export default class OptionCard extends React.Component<IOptionCardProps, IOptionCardState> {
  public static contextType = AdminPageContext;
  public context: IReactronComponentContext;

  constructor(props: IOptionCardProps) {
    super(props);

    const newOptions = this.setDefaultValues(props.options || {});

    this.state = {
      newOptions,
      showDebug: false,
      showExpertOptions: false,
    };

    this.cancel = this.cancel.bind(this);
    this.save = this.save.bind(this);
    this.reset = this.reset.bind(this);
    this.optionsChange = this.optionsChange.bind(this);
    this.toggleStyleOptions = this.toggleStyleOptions.bind(this);
    this.toggleDebug = this.toggleDebug.bind(this);
  }

  public async componentDidMount() {
    const formContext = new OptionsCardContextData(this.context);
    await formContext.init();
    this.setState({ formContext });
  }

  // init fields
  private setDefaultValues(options: object) {
    this.props.fields.forEach(field => {
      let value = options[field.name];

      if (value === undefined) {
        value = getDefaultFieldValue(field);
        if (value !== undefined) {
          options[field.name] = value;
        }
      }
    });
    return options;
  }

  private reset() {
    const newOptions = this.setDefaultValues(this.props.options || {});
    this.setState({ newOptions });
  }

  private async save() {
    if (this.state.formContext) {
      await this.state.formContext.onSave.publish();
      return this.props.onSave(this.state.newOptions);
    }
  }

  private cancel() {
    return this.props.onCancel && this.props.onCancel();
  }

  private optionsChange(newValue: any) {
    this.setState({ newOptions: newValue });
  }

  private toggleStyleOptions() {
    this.setState(prevState => ({ showExpertOptions: !prevState.showExpertOptions }));
  }

  private toggleDebug() {
    this.setState(prevState => ({ showDebug: !prevState.showDebug }));
  }

  public renderTitle() {
    return (
      <UiCardTitle>
        <FontAwesomeIcon icon={this.props.icon} /> {this.props.title}
        <div className="buttons">
          {this.props.showToggleStyleOptions && (
            <UiButton onClick={this.toggleStyleOptions}>
              Style options <FontAwesomeIcon icon={this.state.showExpertOptions ? RegularIcons.faEye : RegularIcons.faEyeSlash} />
            </UiButton>
          )}
          <UiButton onClick={this.toggleDebug}>
            Debug <FontAwesomeIcon icon={this.state.showDebug ? RegularIcons.faEye : RegularIcons.faEyeSlash} />
          </UiButton>
        </div>
      </UiCardTitle>
    );
  }

  public renderContent() {
    if(!this.state.formContext){
      return null;
    }
    return (
      <OptionCardContext.Provider value={this.state.formContext}>
        <OptionList fields={this.props.fields} value={this.state.newOptions} valueChange={this.optionsChange} />
      </OptionCardContext.Provider>
    );
  }

  public renderStyleOptionsStyle() {
    if (this.state.showExpertOptions) {
      return null;
    }
    return <style>{'[data-valuetype="style"] { display: none; }'}</style>;
  }

  public renderDebugStyle() {
    if (this.state.showDebug) {
      return null;
    }
    return <style>{'.debug { display: none; }'}</style>;
  }

  public renderFooter() {
    return (
      <UiCardButtonRow divider="half">
        {this.props.onCancel && (
          <UiButton onClick={this.cancel}>
            <FontAwesomeIcon icon={SolidIcons.faTimes} /> Cancel
          </UiButton>
        )}
        {this.props.showReset && (
          <UiButton onClick={this.reset}>
            <FontAwesomeIcon icon={SolidIcons.faUndo} /> Reset
          </UiButton>
        )}
        <UiButton onClick={this.save}>
          <FontAwesomeIcon icon={SolidIcons.faSave} /> Save
        </UiButton>
      </UiCardButtonRow>
    );
  }

  public render() {
    const className = 'OptionCard ' + this.props.className;

    return (
      <UiCard className={className}>
        {this.renderTitle()}
        {this.renderContent()}
        {this.renderFooter()}
        {this.renderStyleOptionsStyle()}
        {this.renderDebugStyle()}
      </UiCard>
    );
  }
}
