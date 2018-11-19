import * as React from 'react';
import Loading from '../Loading/Loading';
import UiCard from '../UiCard/UiCard';
import UiCardContent from '../UiCardContent/UiCardContent';
import UiCardTitle from '../UiCardTitle/UiCardTitle';

import './UiLoadingCard.css';

// tslint:disable-next-line:no-empty-interface
export interface IUiLoadingCardProps {
  // TODO
}

export default class UiLoadingCard extends React.Component<IUiLoadingCardProps> {
  public render() {
    return (
      <UiCard className="UiLoadingCard">
        <UiCardTitle>
          Loading...
        </UiCardTitle>
        <UiCardContent>
          <Loading />
        </UiCardContent>
      </UiCard>
    );
  }
}
