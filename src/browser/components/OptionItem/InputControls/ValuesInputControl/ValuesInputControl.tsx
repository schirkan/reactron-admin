import { IInputComponentProps, IOptionDefinitionValue } from '@schirkan/reactron-interfaces';
import * as React from 'react';

interface IValuesInputControlState {
  values?: IOptionDefinitionValue<any>[];
}

export class ValuesInputControl extends React.Component<IInputComponentProps, IValuesInputControlState> {
  constructor(props: IInputComponentProps) {
    super(props);
    this.state = {};
    this.onSelectValueChange = this.onSelectValueChange.bind(this);
  }

  private onSelectValueChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    this.props.valueChange(this.props.definition, e.currentTarget.value);
  };

  public componentDidMount() {
    let values = this.props.definition.values || [];

    if (typeof values === 'function') {
      values(this.props.context).then(values => this.setState({ values }));
    } else {
      this.setState({ values });
    }
  }

  public render() {
    if (!this.state.values || !this.state.values.length) {
      return null;
    }

    const options = this.state.values.map((item, index) => <option key={index} value={item.value}>{item.text}</option>);
    return (
      <select id={this.props.uniqueId} value={this.props.value} onChange={this.onSelectValueChange}>
        <option>Select item...</option>
        {options}
      </select>
    );
  }
}