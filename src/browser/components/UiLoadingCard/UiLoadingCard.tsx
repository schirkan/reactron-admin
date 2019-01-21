import * as React from 'react';
import Loading from '../Loading/Loading';
import UiCard from '../UiCard/UiCard';
import UiCardContent from '../UiCardContent/UiCardContent';
import UiCardTitle from '../UiCardTitle/UiCardTitle';

import './UiLoadingCard.scss';

export default class UiLoadingCard extends React.Component {
  public render() {
    return (
      <UiCard className="UiLoadingCard">
        <UiCardTitle>
          Loading...
        </UiCardTitle>
        <UiCardContent>
          <Loading />
        </UiCardContent>
        {this.props.children}
      </UiCard>
    );
  }
}
