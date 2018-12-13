import { IFieldDefinition, IInputComponentProps } from '@schirkan/reactron-interfaces';
import * as React from 'react';
import { IInputControls, IInputControlsProvider } from './IInputControls';

export class TextControlsProvider implements IInputControlsProvider {
  public match(definition: IFieldDefinition): boolean {
    return definition.valueType === 'string';
  }

  public get(definition: IFieldDefinition): IInputControls {
    if (definition.textRows !== undefined && definition.textRows > 1) {
      return {
        detailsControl: TextAreaInputControl,
        inputControl: (props: IInputComponentProps) => props && props.value
      };
    }

    return {
      inputControl: TextBoxInputControl
    };
  }
}

// tslint:disable-next-line:max-classes-per-file
class TextBoxInputControl extends React.Component<IInputComponentProps>{
  constructor(props: IInputComponentProps) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
  }

  private onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.props.valueChange(this.props.definition, e.currentTarget.value);
  }

  public render() {
    return (
      <input type="text" id={this.props.uniqueId} value={this.props.value} onChange={this.onInputChange} />
    );
  }
}

// tslint:disable-next-line:max-classes-per-file
class TextAreaInputControl extends React.Component<IInputComponentProps>{
  constructor(props: IInputComponentProps) {
    super(props);
    this.onTextareaChange = this.onTextareaChange.bind(this);
  }

  private onTextareaChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    this.props.valueChange(this.props.definition, e.currentTarget.value);
  }

  public render() {
    return (
      <textarea id={this.props.uniqueId} value={this.props.value} onChange={this.onTextareaChange} rows={this.props.definition.textRows} />
    );
  }
}