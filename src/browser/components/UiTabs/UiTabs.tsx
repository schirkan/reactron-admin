import classname from 'classnames';
import * as React from 'react';
import { IUiComponentProps } from '../IUiComponentProps';
import UiTab from './UiTab';

import './UiTabs.scss';

interface IUiTabsState {
  selectedTabIndex: number;
}

export default class UiTabs extends React.Component<IUiComponentProps, IUiTabsState> {
  constructor(props: IUiComponentProps) {
    super(props);

    this.state = {
      selectedTabIndex: 0
    };
  }

  private renderTabHeader(tab: UiTab, index: number) {
    if (!tab || !tab.props || !tab.props.title) {
      return null;
    }
    const toggleSelectedTab = () => this.setState({ selectedTabIndex: index });
    const className = 'UiTabHeader' +  (this.state.selectedTabIndex === index ? ' selected' : '');
    return (
      <div key={index} className={className} onClick={toggleSelectedTab}>
        {tab.props.title}
      </div>
    );
  }

  private renderTabHeaders() {
    if (!this.props.children) {
      return null;
    }
    const tabs = this.props.children as UiTab[];
    return (
      <header>
        {tabs.map((tab, index) => this.renderTabHeader(tab, index))}
      </header>
    );
  }

  private renderTabContents() {
    if (!this.props.children) {
      return null;
    }
    return this.props.children[this.state.selectedTabIndex];
  }

  public render() {
    return (
      <section className={classname('UiTabs', this.props.className)} style={this.props.style}>
        {this.renderTabHeaders()}
        {this.renderTabContents()}
      </section>
    );
  }
}