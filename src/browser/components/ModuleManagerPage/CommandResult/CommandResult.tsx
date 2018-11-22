import * as SolidIcons from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ICommandResult } from '@schirkan/reactron-interfaces';
import * as React from 'react';
import UiButton from '../../UiButton/UiButton';
import UiCard from '../../UiCard/UiCard';
import UiCardContent from '../../UiCardContent/UiCardContent';
import UiCardTitle from '../../UiCardTitle/UiCardTitle';

import './CommandResult.scss';

export interface ICommandResultProps {
  results: ICommandResult[];
  onClose: () => void;
}

export default class CommandResult extends React.Component<ICommandResultProps> {
  constructor(props: ICommandResultProps) {
    super(props);
  }

  public renderCommandResult(result: ICommandResult, key: string) {
    const icon = result.success === false ?
      <FontAwesomeIcon icon={SolidIcons.faTimes} /> :
      result.success === true ?
        <FontAwesomeIcon icon={SolidIcons.faCheck} /> :
        <FontAwesomeIcon icon={SolidIcons.faQuestion} />;

    let log: JSX.Element | undefined;
    if (result.log && result.log.length) {
      log = (
        <ul className="log">
          {result.log.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      );
    }

    let title = result.command || '';
    if (result.args) {
      title += ' | args: ' + result.args;
    }

    return (
      <React.Fragment key={key}>
        <div className="result">
          <div className="commandTitle">{icon} {title}</div>
          {log}
        </div>
        {result.children && result.children.map((child, index) =>
          this.renderCommandResult(child, key + '.' + index))}
      </React.Fragment>
    );
  }

  public render() {
    return (
      <UiCard className="CommandResult">
        <UiCardTitle>
          Result
          <UiButton onClick={this.props.onClose}>
            <FontAwesomeIcon icon={SolidIcons.faTimes} />
          </UiButton>
        </UiCardTitle>
        <UiCardContent>
          {this.props.results.map((item, index) => this.renderCommandResult(item, index.toString()))}
        </UiCardContent>
      </UiCard>
    );
  }
}
