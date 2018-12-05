import { IFieldDefinition, IInputComponentProps } from '@schirkan/reactron-interfaces';
import * as React from 'react';
import { IInputControls, IInputControlsProvider } from './IInputControls';

export class ValuesControlsProvider implements IInputControlsProvider {
  public match(definition: IFieldDefinition): boolean {
    return !!(definition.values && definition.values.length);
  }

  public get(): IInputControls {
    return {
      inputControl: ValuesInputControl
    };
  }
}

// tslint:disable-next-line:max-classes-per-file
class ValuesInputControl extends React.Component<IInputComponentProps>{
  constructor(props: IInputComponentProps) {
    super(props);
    this.onSelectValueChange = this.onSelectValueChange.bind(this);
  }

  private onSelectValueChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    this.props.valueChange(this.props.definition, e.currentTarget.value);
  }

  public render() {
    const values = this.props.definition.values || [];
    const options = values.map((item, index) =>
      <option key={index} value={item.value}>{item.text}</option>
    );

    return (
      <select id={this.props.uniqueId} value={this.props.value} onChange={this.onSelectValueChange}>
        {options}
      </select>
    );
  }
}