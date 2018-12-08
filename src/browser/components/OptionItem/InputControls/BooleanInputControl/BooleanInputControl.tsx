import { IInputComponentProps } from '@schirkan/reactron-interfaces';
import * as React from 'react';

import './BooleanInputControl.scss';

export class BooleanInputControl extends React.Component<IInputComponentProps> {
  constructor(props: IInputComponentProps) {
    super(props);
    this.onCheckboxChange = this.onCheckboxChange.bind(this);
  }

  private onCheckboxChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.props.valueChange(this.props.definition, e.currentTarget.value);
  }

  public render() {
    return (
      <label className="BooleanInputControl">
        <input type="checkbox" id={this.props.uniqueId} value={this.props.value} onChange={this.onCheckboxChange} />
        <span className="slider" />
      </label>
    );
  }
}