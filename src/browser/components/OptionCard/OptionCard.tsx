import { IconProp } from "@fortawesome/fontawesome-svg-core";
import * as SolidIcons from '@fortawesome/free-solid-svg-icons';
import * as RegularIcons from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IFieldDefinition } from "@schirkan/reactron-interfaces";
import * as React from 'react';
import { getDefaultFieldValue } from "src/common/optionsHelper";
import OptionList from '../OptionList/OptionList';
import UiButton from '../UiButton/UiButton';
import UiCard from '../UiCard/UiCard';
import UiCardButtonRow from '../UiCardButtonRow/UiCardButtonRow';
import UiCardContent from '../UiCardContent/UiCardContent';
import UiCardTitle from '../UiCardTitle/UiCardTitle';
import { OptionCardContext, OptionsCardContextData } from './OptionCardContext';

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
}

interface IOptionCardState {
  newOptions: any;
  formContext: OptionsCardContextData;
  showDebug: boolean;
  showExpertOptions: boolean;
}

export default class OptionCard extends React.Component<IOptionCardProps, IOptionCardState> {
  constructor(props: IOptionCardProps) {
    super(props);

    const newOptions = this.setDefaultValues(props.options || {});

    this.state = {
      newOptions,
      formContext: new OptionsCardContextData(),
      showDebug: false,
      showExpertOptions: false,
    };

    this.cancel = this.cancel.bind(this);
    this.save = this.save.bind(this);
    this.reset = this.reset.bind(this);
    this.optionsChange = this.optionsChange.bind(this);
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
    await this.state.formContext.onSave.publish();
    return this.props.onSave(this.state.newOptions);
  }

  private cancel() {
    return this.props.onCancel && this.props.onCancel();
  }

  private optionsChange(newValue: any) {
    this.setState({ newOptions: newValue });
  }

  public renderTitle() {
    return (
      <UiCardTitle>
        <FontAwesomeIcon icon={this.props.icon} /> {this.props.title}
        <div className="buttons">
          <UiButton onClick={() => this.setState({ showExpertOptions: !this.state.showExpertOptions })}>
            Style options <FontAwesomeIcon icon={this.state.showExpertOptions ? RegularIcons.faEye : RegularIcons.faEyeSlash} />
          </UiButton>
          <UiButton onClick={() => this.setState({ showDebug: !this.state.showDebug })}>
            Debug <FontAwesomeIcon icon={this.state.showDebug ? RegularIcons.faEye : RegularIcons.faEyeSlash} />
          </UiButton>
        </div>
      </UiCardTitle>
    );
  }

  public renderContent() {
    return (
      <OptionCardContext.Provider value={this.state.formContext}>
        <OptionList fields={this.props.fields}
          value={this.state.newOptions}
          valueChange={this.optionsChange}
        />
      </OptionCardContext.Provider>
    );
  }

  public renderExportStyle() {
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
        {this.renderExportStyle()}
        {this.renderDebugStyle()}
        {this.renderFooter()}
      </UiCard >
    );
  }
}
