import { IInputComponentProps } from '@schirkan/reactron-interfaces';
import * as React from 'react';

export class NumberInputControl extends React.Component<IInputComponentProps> {
  constructor(props: IInputComponentProps) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
  }

  private onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.props.valueChange(this.props.definition, e.currentTarget.value);
  }

  public render() {
    const click = (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
    };
    return (
      <input style={{ width: '100%' }} type="number" onClick={click}
        id={this.props.uniqueId} value={this.props.value}
        onChange={this.onInputChange} step={this.props.definition.stepSize}
        min={this.props.definition.minValue} max={this.props.definition.maxValue} />
    );
  }
}
