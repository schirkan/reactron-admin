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

const tabContext = React.createContext<IUiTabsState>({ selectedTabIndex: 0 });

export default class UiTabs extends React.Component<IUiTabsProps, IUiTabsState> {
  constructor(props: IUiTabsProps) {
    super(props);

    this.state = {
      selectedTabIndex: 0
    };
  }

  private renderTabHeader(tab: UiTab, index: number) {
    if (!tab || !tab.props || !tab.props.title) {
      return null;
    }
    const toggleSelectedTab = () => this.setState({ selectedTabIndex:index });
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
        {this.props.children.map((tab, index) => this.renderTabHeader(tab, index))}
      </header>
    );
  }

  // private renderTabContent(tab: UiTab, index: number) {
  //   if (!tab || !tab.props || !tab.props.title) {
  //     return null;
  //   }
    
  //   return (
  //     <div key={tab.props.title}>
  //       {tab.props.children}
  //     </div>
  //   );

  //   // hidden={!this.props.selected}
  // }

  private renderTabContents() {
    if (!this.props.children) {
      return null;
    }

    return this.props.children[this.state.selectedTabIndex];

    // return (
    //   <section>
    //     {this.props.children.map((tab, index) => this.renderTabContent(tab, index))}
    //   </section>
    // );
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


// interface IUiTabProps extends IUiComponentProps {
//   title: string;
//   selected?: boolean;
// }

// class UiTab extends React.Component<IUiTabProps> {
//   public render() {
//     return (
//       <div className={classname('UiTab', this.props.className)} style={this.props.style} hidden={!this.props.selected}>
//         {this.props.children}
//       </div>
//     );
//   }
// }