import * as SolidIcons from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IServiceRepositoryItem } from '@schirkan/reactron-interfaces';
import * as React from 'react';
import UiButton from '../../UiButton/UiButton';
import UiCard from '../../UiCard/UiCard';
import UiCardTitle from '../../UiCardTitle/UiCardTitle';
import ServiceListItem from '../ServiceListItem/ServiceListItem';

import './ServiceGroupCard.scss';

export interface IServiceGroupCardProps {
  services: IServiceRepositoryItem[];
  moduleName: string;
  onShowServiceLog: (service: IServiceRepositoryItem) => any;
  onShowServiceOptions: (service: IServiceRepositoryItem) => any;
}

export interface IServiceGroupCardState {
  groupOpen: boolean;
}

export default class ServiceGroupCard extends React.Component<IServiceGroupCardProps, IServiceGroupCardState> {
  constructor(props: any) {
    super(props);

    this.state = {
      groupOpen: false
    };

    this.toggleGroup = this.toggleGroup.bind(this);
  }

  private toggleGroup() {
    this.setState(state => ({ groupOpen: !state.groupOpen }));
  }

  public render() {
    return (
      <UiCard className="ServiceGroupCard">
        {/* <UiCardTitle className="group-header" onClick={this.toggleGroup}> */}
          <UiButton className="group-header UiCardTitle" onClick={this.toggleGroup}>
            <FontAwesomeIcon icon={SolidIcons.faCube} /> {this.props.moduleName} ({this.props.services.length})
            <FontAwesomeIcon icon={this.state.groupOpen ? SolidIcons.faArrowDown : SolidIcons.faArrowRight} />
          </UiButton>
        {/* </UiCardTitle> */}
        {this.state.groupOpen && this.props.services.map(item =>
          <ServiceListItem key={item.name} service={item} onShowLog={this.props.onShowServiceLog} onShowOptions={this.props.onShowServiceOptions} />
        )}
      </UiCard>
    );
  }
}