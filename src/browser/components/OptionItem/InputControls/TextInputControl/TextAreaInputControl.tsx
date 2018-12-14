import { IInputComponentProps } from '@schirkan/reactron-interfaces';
import * as React from 'react';

export class TextAreaInputControl extends React.Component<IInputComponentProps> {
  constructor(props: IInputComponentProps) {
    super(props);
    this.onTextareaChange = this.onTextareaChange.bind(this);
  }

  private onTextareaChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    this.props.valueChange(this.props.definition, e.currentTarget.value);
  }

  public render() {
    return <textarea id={this.props.uniqueId} value={this.props.value} onChange={this.onTextareaChange} rows={this.props.definition.textRows} />;
  }
}
