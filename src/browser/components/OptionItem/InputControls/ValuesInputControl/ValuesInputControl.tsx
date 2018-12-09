import { IInputComponentProps } from '@schirkan/reactron-interfaces';
import * as React from 'react';

export class ValuesInputControl extends React.Component<IInputComponentProps> {
  constructor(props: IInputComponentProps) {
    super(props);
    this.onSelectValueChange = this.onSelectValueChange.bind(this);
  }

  private onSelectValueChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    this.props.valueChange(this.props.definition, e.currentTarget.value);
  };

  public render() {
    const values = this.props.definition.values || [];
    const options = values.map((item, index) => <option key={index} value={item.value}>{item.text}</option>);
    return (<select id={this.props.uniqueId} value={this.props.value} onChange={this.onSelectValueChange}>
      <option>Select item...</option>
      {options}
    </select>);
  }
}