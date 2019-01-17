import * as SolidIcons from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IServiceRepositoryItem } from '@schirkan/reactron-interfaces';
import * as React from 'react';
import UiButton from '../../UiButton/UiButton';

import './ServiceListItem.scss';

export interface IServiceListItemProps {
  service: IServiceRepositoryItem;
  onShowDetails: (service: IServiceRepositoryItem) => void;
}

export default class ServiceListItem extends React.Component<IServiceListItemProps> {
  constructor(props: IServiceListItemProps) {
    super(props);

    this.showDetails = this.showDetails.bind(this);
  }

  private showDetails() {
    return this.props.onShowDetails(this.props.service);
  }

  public render() {
    return (
      <UiButton className="ServiceListItem UiCardContent" onClick={this.showDetails}>
        <FontAwesomeIcon icon={SolidIcons.faCogs} /> {this.props.service.displayName}
        <UiButton>
          <FontAwesomeIcon icon={SolidIcons.faArrowRight} />
        </UiButton>
      </UiButton>
    );
  }
}
