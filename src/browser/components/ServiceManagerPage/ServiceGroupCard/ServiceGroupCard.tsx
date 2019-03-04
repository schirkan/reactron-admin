import * as SolidIcons from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IServiceRepositoryItem } from '@schirkan/reactron-interfaces';
import * as React from 'react';
import UiCard from '../../UiCard/UiCard';
import UiCardTitle from '../../UiCardTitle/UiCardTitle';
import ServiceListItem from '../ServiceListItem/ServiceListItem';

import './ServiceGroupCard.scss';

export interface IServiceGroupCardProps {
  services: IServiceRepositoryItem[];
  moduleDisplayName: string;
  onShowDetails: (service: IServiceRepositoryItem) => any;
}

export default class ServiceGroupCard extends React.Component<IServiceGroupCardProps> {
  public render() {
    return (
      <UiCard className="ServiceGroupCard">
        <UiCardTitle>
          <FontAwesomeIcon icon={SolidIcons.faCube} /> {this.props.moduleDisplayName}
        </UiCardTitle>
        {this.props.services.map(item =>
          <ServiceListItem key={item.name} service={item} onShowDetails={this.props.onShowDetails} />
        )}
      </UiCard>
    );
  }
}