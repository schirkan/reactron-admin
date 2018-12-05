import { IFieldDefinition, IInputComponentProps } from '@schirkan/reactron-interfaces';
import * as React from 'react';
import { IInputControls, IInputControlsProvider } from './IInputControls';

export class BooleanControlsProvider implements IInputControlsProvider {
  public match(definition: IFieldDefinition): boolean {
    return definition.valueType === 'boolean';
  }

  public get(): IInputControls {
    return {
      inputControl: BooleanInputControl
    }
  }
}

// tslint:disable-next-line:max-classes-per-file
class BooleanInputControl extends React.Component<IInputComponentProps>{
  constructor(props: IInputComponentProps) {
    super(props);
    this.onCheckboxChange = this.onCheckboxChange.bind(this);
  }

  private onCheckboxChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.props.valueChange(this.props.definition, e.currentTarget.value);
  }

  public render() {
    return (
      <input type="checkbox" id={this.props.uniqueId} value={this.props.value} onChange={this.onCheckboxChange} />
    );
  }
}