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
  moduleName: string;
  onShowServiceLog: (service: IServiceRepositoryItem) => any;
  onShowServiceOptions: (service: IServiceRepositoryItem) => any;
}

export default class ServiceGroupCard extends React.Component<IServiceGroupCardProps> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <UiCard className="ServiceGroupCard">
        <UiCardTitle className="group-header">
            <FontAwesomeIcon icon={SolidIcons.faCube} /> {this.props.moduleName}
        </UiCardTitle>
        {this.props.services.map(item =>
          <ServiceListItem key={item.name} service={item} onShowLog={this.props.onShowServiceLog} onShowOptions={this.props.onShowServiceOptions} />
        )}
      </UiCard>
    );
  }
}