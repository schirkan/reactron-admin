import classname from 'classnames';
import * as React from 'react';
import { IUiComponentProps } from '../IUiComponentProps';

interface IUiTabProps extends IUiComponentProps {
  title: string;
}

export default class UiTab extends React.Component<IUiTabProps> {
  public render() {
    return (
      <div className={classname('UiTab', this.props.className)} style={this.props.style}>
        {this.props.children}
      </div>
    );
  }
}