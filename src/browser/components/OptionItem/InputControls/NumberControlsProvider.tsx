import { IFieldDefinition, IInputComponentProps } from '@schirkan/reactron-interfaces';
import * as React from 'react';
import { IInputControls, IInputControlsProvider } from './IInputControls';

export class NumberControlsProvider implements IInputControlsProvider {
  public match(definition: IFieldDefinition): boolean {
    return definition.valueType === 'number';
  }

  public get(definition: IFieldDefinition): IInputControls {
    if (definition.minValue !== undefined &&
      definition.maxValue !== undefined) {
      return {
        inputControl: NumberInputControl,
        detailsControl: RangeInputControl
      };
    }

    return {
      inputControl: NumberInputControl
    };
  }
}

// tslint:disable-next-line:max-classes-per-file
class NumberInputControl extends React.Component<IInputComponentProps>{
  constructor(props: IInputComponentProps) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
  }

  private onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.props.valueChange(this.props.definition, e.currentTarget.value);
  }

  public render() {
    return (
      <input style={{ width: '100%' }} type="number" id={this.props.uniqueId} value={this.props.value}
        onChange={this.onInputChange} step={this.props.definition.stepSize}
        min={this.props.definition.minValue} max={this.props.definition.maxValue} />
    );
  }
}

// tslint:disable-next-line:max-classes-per-file
class RangeInputControl extends React.Component<IInputComponentProps>{
  constructor(props: IInputComponentProps) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
  }

  private onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.props.valueChange(this.props.definition, e.currentTarget.value);
  }

  public render() {
    return (
      <input style={{ width: '100%' }} type="range" id={this.props.uniqueId} value={this.props.value}
        onChange={this.onInputChange} step={this.props.definition.stepSize}
        min={this.props.definition.minValue} max={this.props.definition.maxValue} />
    );
  }
}