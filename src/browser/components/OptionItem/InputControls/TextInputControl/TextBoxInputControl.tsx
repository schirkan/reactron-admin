import { IInputComponentProps } from '@schirkan/reactron-interfaces';
import * as React from 'react';

export class TextBoxInputControl extends React.Component<IInputComponentProps> {
  constructor(props: IInputComponentProps) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
  }

  private onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.props.valueChange(this.props.definition, e.currentTarget.value);
  }

  public render() {
    return <input type="text" id={this.props.uniqueId} value={this.props.value} onChange={this.onInputChange} />;
  }
}
