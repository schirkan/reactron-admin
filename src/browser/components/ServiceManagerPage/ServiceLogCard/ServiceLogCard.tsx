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

import './ServiceLogCard.scss';
import { apiClient } from 'src/browser/ApiClient';

export interface IServiceLogCardProps {
  service: IServiceRepositoryItem;
  onClose: () => any;
}

interface IServiceLogCardState {
  log: ILogEntry[];
}

export default class ServiceLogCard extends React.Component<IServiceLogCardProps, IServiceLogCardState> {
  constructor(props: any) {
    super(props);

    this.state = { log: [] };

    this.close = this.close.bind(this);
    this.loadLog = this.loadLog.bind(this);
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
    apiClient.getLogEntries({ source }).then(log => {
      this.setState({ log });
    });
  }

  public render() {
    return (
      <UiCard className="ServiceLogCard">
        <UiCardTitle>
          <FontAwesomeIcon icon={RegularIcons.faFile} /> Log for {this.props.service.displayName}
        </UiCardTitle>
        <UiCardContent>
          {this.state.log.map(entry => (
            <div className="log-item" data-severity={entry.severity}>
              <div className="timestamp">{moment(entry.timestamp).toISOString()}</div>
              <div className="message">{entry.message}</div>
              {entry.data && (<div className="data">{JSON.stringify(entry.data)}</div>)}
            </div>
          ))}
        </UiCardContent>
        <UiCardButtonRow>
          <UiButton onClick={this.close}>
            <FontAwesomeIcon icon={SolidIcons.faTimes} /> Close
          </UiButton>
        </UiCardButtonRow>
      </UiCard>
    );
  }
}