import * as RegularIcons from '@fortawesome/free-regular-svg-icons';
import * as SolidIcons from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IServiceRepositoryItem } from '@schirkan/reactron-interfaces';
import * as React from 'react';
import UiButton from '../../UiButton/UiButton';
import UiCardButtonRow from '../../UiCardButtonRow/UiCardButtonRow';
import UiCardContent from '../../UiCardContent/UiCardContent';

import './ServiceListItem.scss';

export interface IServiceListItemProps {
  service: IServiceRepositoryItem;
  onShowLog: (service: IServiceRepositoryItem) => void;
  onShowOptions: (service: IServiceRepositoryItem) => void;
}

export default class ServiceListItem extends React.Component<IServiceListItemProps> {
  constructor(props: IServiceListItemProps) {
    super(props);

    this.showOptions = this.showOptions.bind(this);
    this.showLog = this.showLog.bind(this);
  }

  private showOptions() {
    return this.props.onShowOptions(this.props.service);
  }

  private showLog() {
    return this.props.onShowLog(this.props.service);
  }

  private renderButtonRow() {
    const hasLog = this.props.service.log && this.props.service.log.length > 0;
    const hasOptions = this.props.service.fields && this.props.service.fields.length > 0;
    if (!hasLog && !hasOptions) {
      return null;
    }

    return (
      <UiCardButtonRow divider="half">
        {hasLog && (
          <UiButton onClick={this.showLog}>
            <FontAwesomeIcon icon={RegularIcons.faFile} /> Log
          </UiButton>
        )}
        {hasOptions && (
          <UiButton onClick={this.showOptions}>
            <FontAwesomeIcon icon={SolidIcons.faCog} /> Options
          </UiButton>
        )}
      </UiCardButtonRow>
    );
  }

  public render() {
    return (
      <React.Fragment key={this.props.service.name}>
        <UiCardContent className="ServiceListItem">
          <FontAwesomeIcon icon={SolidIcons.faCogs} /> {this.props.service.name}
        </UiCardContent>
        {this.props.service.description && (
          <UiCardContent>{this.props.service.description}</UiCardContent>
        )}
        {this.renderButtonRow()}
      </React.Fragment>
    );
  }
}
