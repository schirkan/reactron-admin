import classname from 'classnames';
import * as React from 'react';
import { IUiComponentProps } from '../IUiComponentProps';

import './UiCard.css';

export default class UiCard extends React.Component<IUiComponentProps> {
  public render() {
    return (
      <section className={classname('UiCard', this.props.className)} style={this.props.style}>
        {this.props.children}
      </section>
    );
  }
}
