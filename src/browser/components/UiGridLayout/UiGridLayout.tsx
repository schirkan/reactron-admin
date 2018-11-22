import classname from 'classnames';
import * as React from 'react';
import { IUiComponentProps } from '../IUiComponentProps';

import './UiGridLayout.scss';

export default class UiGridLayout extends React.Component<IUiComponentProps> {
  public render() {
    return (
      <section className={classname('UiGridLayout', this.props.className)} style={this.props.style}>
        {this.props.children}
      </section>
    );
  }
}
