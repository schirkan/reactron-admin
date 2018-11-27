import classname from 'classnames';
import * as React from 'react';
import { IUiComponentProps } from '../IUiComponentProps';
import UiTab from './UiTab';

import './UiTabs.scss';


interface IUiTabsProps extends IUiComponentProps {
  children: UiTab[];
}

interface IUiTabsState {
  selectedTabIndex: number;
}

const tabContext = React.createContext<IUiTabsState>({selectedTabIndex: 0});

export default class UiTabs extends React.Component<IUiTabsProps, IUiTabsState> {
  constructor(props: IUiTabsProps) {
    super(props);

    this.state = {
      selectedTabIndex: 0
    };
  }

  private setSelectedTab(tab: UiTab) {
    const selectedTabIndex = this.props.children.findIndex(x => x === tab);
    this.setState({ selectedTabIndex });
  }

  private renderTabHeader(tab: UiTab) {
    const toggleSelectedTab = this.setSelectedTab.bind(this, tab);
    return (
      <div key={tab.props.title} onClick={toggleSelectedTab}>
        {tab.props.title}
      </div>
    );
  }

  private renderTabHeaders() {
    if (!this.props.children) {
      return null;
    }

    return (
      <header>
        {this.props.children.map(tab => this.renderTabHeader(tab))}
      </header>
    );
  }

  public render() {
    return (
      <section className={classname('UiTabs', this.props.className)} style={this.props.style}>
        {this.renderTabHeaders()}
        {this.props.children}
      </section>
    );
  }
}
