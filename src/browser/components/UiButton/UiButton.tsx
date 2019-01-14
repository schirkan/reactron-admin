import classname from 'classnames';
import * as React from 'react';
import { IUiComponentProps } from "../IUiComponentProps";

import './UiButton.scss';

export interface IUiButtonProps extends IUiComponentProps {
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => any;
}

interface IUiButtonState {
  running: boolean;
}

export default class UiButton extends React.Component<IUiButtonProps, IUiButtonState> {
  private disposed = false;

  constructor(props: IUiButtonProps) {
    super(props);

    this.state = { running: false };

    this.onClick = this.onClick.bind(this);
  }

  private onClick(e: React.MouseEvent) {    
    if (!this.props.onClick || this.props.disabled || this.state.running) {
      return;
    }
    e.preventDefault();
    e.bubbles = false;
    e.stopPropagation();
    
    this.setState({ running: true }, () => {
      Promise.resolve(this.props.onClick && this.props.onClick(e))
        .catch()
        .then(() => {
          if (!this.disposed) {
            this.setState({ running: false });
          }
        });
    });
  }

  public componentWillUnmount() {
    this.disposed = true;
  }

  public render() {
    const className = classname('UiButton', 'clickable',
      this.props.className, { 'disabled': this.props.disabled || this.state.running });

    return (
      <div className={className} onClick={this.onClick} style={this.props.style}>
        {this.props.children}
      </div>
    );
  }
}
