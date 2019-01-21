import * as RegularIcons from '@fortawesome/free-regular-svg-icons';
import * as SolidIcons from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IServiceRepositoryItem, ILogEntry } from '@schirkan/reactron-interfaces';
import * as React from 'react';
import UiCard from '../../UiCard/UiCard';
import UiCardTitle from '../../UiCardTitle/UiCardTitle';
import UiCardContent from '../../UiCardContent/UiCardContent';
import UiCardButtonRow from '../../UiCardButtonRow/UiCardButtonRow';
import UiButton from '../../UiButton/UiButton';
import moment from 'moment';
import { apiClient } from 'src/browser/ApiClient';
import Loading from '../../Loading/Loading';

import './ServiceLogCard.scss';

export interface IServiceLogCardProps {
  service: IServiceRepositoryItem;
  onClose: () => any;
}

interface IServiceLogCardState {
  log: ILogEntry[];
  loading: boolean;
  showDebug: boolean;
  showInfo: boolean;
  showWarning: boolean;
  showError: boolean;
}

export default class ServiceLogCard extends React.Component<IServiceLogCardProps, IServiceLogCardState> {
  private card: UiCard | null;

  constructor(props: any) {
    super(props);

    this.state = {
      log: [],
      loading: true,
      showDebug: true,
      showInfo: true,
      showWarning: true,
      showError: true
    };

    this.close = this.close.bind(this);
    this.loadLog = this.loadLog.bind(this);
    this.toggleDebug = this.toggleDebug.bind(this);
    this.toggleInfo = this.toggleInfo.bind(this);
    this.toggleWarning = this.toggleWarning.bind(this);
    this.toggleError = this.toggleError.bind(this);
    this.scrollToTop = this.scrollToTop.bind(this);
    this.scrollToBottom = this.scrollToBottom.bind(this);
  }

  private scrollToTop() {
    this.card && this.card.scrollToTop();
  }

  private scrollToBottom() {
    this.card && this.card.scrollToBottom();
  }

  private close() {
    this.props.onClose();
  }

  public componentDidMount() {
    this.loadLog();
  }

  // public componentDidUpdate(prevProps: IServiceLogCardProps) {
  //   if (prevProps.service !== this.props.service) {
  //     this.setState({ log: [] }, this.loadLog);
  //   }
  // }

  private loadLog() {
    const source = this.props.service.moduleName + '.' + this.props.service.name;
    apiClient.getLogEntries(undefined, { source }).then(log => {
      this.setState({ log, loading: false });
    });
  }

  private toggleDebug() {
    this.setState(prevState => ({ showDebug: !prevState.showDebug }));
  }

  private toggleInfo() {
    this.setState(prevState => ({ showInfo: !prevState.showInfo }));
  }

  private toggleWarning() {
    this.setState(prevState => ({ showWarning: !prevState.showWarning }));
  }

  private toggleError() {
    this.setState(prevState => ({ showError: !prevState.showError }));
  }

  private renderSeverityFilter() {
    const debug = this.state.log.filter(x => x.severity === 'debug').length;
    const information = this.state.log.filter(x => x.severity === 'information').length;
    const warning = this.state.log.filter(x => x.severity === 'warning').length;
    const error = this.state.log.filter(x => x.severity === 'error').length;

    return (
      <div>
        Severity:
        <span className={"filter-severity clickable debug " + (this.state.showDebug ? 'active' : '')} onClick={this.toggleDebug}>{debug} Debug</span>
        <span className={"filter-severity clickable info " + (this.state.showInfo ? 'active' : '')} onClick={this.toggleInfo}>{information} Info</span>
        <span className={"filter-severity clickable warning " + (this.state.showWarning ? 'active' : '')} onClick={this.toggleWarning}>{warning} Warning</span>
        <span className={"filter-severity clickable error " + (this.state.showError ? 'active' : '')} onClick={this.toggleError}>{error} Error</span>
      </div >
    );
  }

  private renderButtons() {
    return (
      <UiCardButtonRow divider="half">
        <UiButton onClick={this.close}><FontAwesomeIcon icon={SolidIcons.faTimes} /> Close</UiButton>
        <UiButton onClick={this.scrollToTop}><FontAwesomeIcon icon={SolidIcons.faArrowUp} /> Top</UiButton>
        <UiButton onClick={this.scrollToBottom}><FontAwesomeIcon icon={SolidIcons.faArrowDown} /> Bottom</UiButton>
      </UiCardButtonRow>
    );
  }

  private renderContent() {
    if (this.state.loading) {
      return <UiCardContent><Loading /></UiCardContent>;
    }
    return (
      <React.Fragment>
        <UiCardContent>
          {this.renderSeverityFilter()}
        </UiCardContent>
        <UiCardContent>
          {this.filterEntries.map(entry => (
            <div className="log-item" data-severity={entry.severity}>
              <div className="timestamp">{moment(entry.timestamp).toISOString()}</div>
              <div className="message">{entry.message}</div>
              {entry.data && (<div className="data">{JSON.stringify(entry.data)}</div>)}
            </div>
          ))}
        </UiCardContent>
      </React.Fragment>
    );
  }

  private get filterEntries(): ILogEntry[] {
    const filter = (item: ILogEntry) => {
      return item.severity === 'debug' && this.state.showDebug ||
        item.severity === 'information' && this.state.showInfo ||
        item.severity === 'warning' && this.state.showWarning ||
        item.severity === 'error' && this.state.showError;
    };
    return this.state.log.filter(filter);
  }

  public render() {
    return (
      <UiCard className="ServiceLogCard" ref={el => this.card = el!}>
        <UiCardTitle>
          <FontAwesomeIcon icon={RegularIcons.faFile} /> Log for {this.props.service.displayName}
        </UiCardTitle>
        {this.renderContent()}
        {this.renderButtons()}
      </UiCard>
    );
  }
}