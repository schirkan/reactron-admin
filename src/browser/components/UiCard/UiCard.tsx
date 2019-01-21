import classname from 'classnames';
import * as React from 'react';
import { IUiComponentProps } from '../IUiComponentProps';

import './UiCard.scss';

export default class UiCard extends React.Component<IUiComponentProps> {
  private root: HTMLElement | null;

  constructor(props: IUiComponentProps) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
    this.scrollToBottom = this.scrollToBottom.bind(this);
  }

  public render() {
    return (
      <section className={classname('UiCard', this.props.className)} style={this.props.style} ref={el => this.root = el}>
        {this.props.children}
      </section>
    );
  }

  public scrollToTop() {
    if (!this.root) {
      return;
    }
    this.root.scrollTo({ top: 0 });
  }

  public scrollToBottom() {
    if (!this.root) {
      return;
    }
    const scrollHeight = this.root.scrollHeight;
    const height = this.root.clientHeight;
    const maxScrollTop = scrollHeight - height;
    this.root.scrollTo({ top: maxScrollTop > 0 ? maxScrollTop : 0 });
  }
}
