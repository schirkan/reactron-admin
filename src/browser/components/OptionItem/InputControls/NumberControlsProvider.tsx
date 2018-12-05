import { IFieldDefinition, IInputComponentProps } from '@schirkan/reactron-interfaces';
import * as React from 'react';
import { IInputControls, IInputControlsProvider } from './IInputControls';

export class NumberControlsProvider implements IInputControlsProvider {
  public match(definition: IFieldDefinition): boolean {
    return definition.valueType === 'string';
  }

  public get(): IInputControls {
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
    let inputType = 'number';

    if (this.props.definition.minValue !== undefined &&
      this.props.definition.maxValue !== undefined) {
      inputType = 'range';
    }

    return (
      <input type={inputType} id={this.props.uniqueId} value={this.props.value}
        onChange={this.onInputChange} step={this.props.definition.stepSize}
        min={this.props.definition.minValue} max={this.props.definition.maxValue} />
    );
  }
}