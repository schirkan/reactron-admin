import { IInputComponentProps } from '@schirkan/reactron-interfaces';
import * as React from 'react';

export default class WebComponentTitle extends React.Component<IInputComponentProps<string>> {
  public render() {
    const definition = this.props.getComponentDefinition(this.props.value);
    return definition && definition.displayName || null;
  }
}
