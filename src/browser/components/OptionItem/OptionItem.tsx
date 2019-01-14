import * as SolidIcons from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IFieldDefinition } from '@schirkan/reactron-interfaces';
import * as React from 'react';
import { AdminPageContext } from '../AdminPageContext';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import UiButton from '../UiButton/UiButton';
import { getInputControls } from './InputControls/getInputControls';
import { IInputControls } from "./InputControls/IInputControls";

import './OptionItem.scss';

let counter = 0;

export interface IOptionItemProps {
  definition: IFieldDefinition;
  value: any;
  valueChange: (definition: IFieldDefinition, newValue: any) => void;
  detailsVisible?: boolean;
}

interface IOptionItemState extends IInputControls {
  uniqueId: string;
  detailsVisible?: boolean;
}

export default class OptionItem extends React.Component<IOptionItemProps, IOptionItemState> {
  public static contextType = AdminPageContext;

  constructor(props: IOptionItemProps) {
    super(props);

    // let detailsVisible = (props.definition.valueType === 'webComponent' && !props.definition.isArray) || undefined;

    this.state = {
      uniqueId: 'ID' + (counter++),
      detailsVisible: props.detailsVisible
    };

    this.toggleItemDetails = this.toggleItemDetails.bind(this);
  }

  public componentDidMount() {
    const inputControls = getInputControls(this.props.definition, this.context) as any;
    const isNewArrayItem = this.props.value && this.props.value.__new;

    // auto open new array items
    if (isNewArrayItem) {
      inputControls.detailsVisible = true;
    }

    this.setState(inputControls, () => {
      if (isNewArrayItem) {
        delete (this.props.value.__new);
        this.props.valueChange(this.props.definition, this.props.value);
      }
    });
  }

  private toggleItemDetails() {
    this.setState(state => ({ detailsVisible: !state.detailsVisible }));
  }

  private renderInputRow() {
    const label = (
      <label htmlFor={this.state.uniqueId}>
        {this.props.children}
        {this.state.icon && (<UiButton><FontAwesomeIcon icon={this.state.icon} /></UiButton>)}
        <span className="header-text">{this.props.definition.displayName}</span>
      </label>
    );

    let input: JSX.Element | string = '';

    if (this.state.inputControl) {
      input = <ErrorBoundary><this.state.inputControl {...this.props} uniqueId={this.state.uniqueId} /></ErrorBoundary>;
    }

    if (this.state.detailsControl) {
      return (
        <UiButton className="item-header" onClick={this.toggleItemDetails}>
          {label}
          <div className="sub-header-text">{input}</div>
          <UiButton>
            <FontAwesomeIcon icon={this.state.detailsVisible ? SolidIcons.faArrowDown : SolidIcons.faArrowRight} />
          </UiButton>
        </UiButton>
      );
    }

    return (
      <React.Fragment>
        {label}
        {input}
      </React.Fragment>
    );
  }

  private renderDetailsForm() {
    if (!this.state.detailsControl) {
      return null;
    }
    return (
      <div className="item-details" hidden={!this.state.detailsVisible}>
        <ErrorBoundary>
          <this.state.detailsControl {...this.props} uniqueId={this.state.uniqueId} />
        </ErrorBoundary>
      </div>
    );
  }

  public render() {
    return (
      <div className="OptionItem"
        data-hasdetails={this.state.detailsControl ? 'true' : 'false'}
        data-detailsvisible={this.state.detailsVisible ? 'true' : 'false'}
        data-isarray={this.props.definition.isArray ? 'true' : 'false'}
        data-valuetype={this.props.definition.valueType}>
        {this.renderInputRow()}
        {this.renderDetailsForm()}
      </div>
    );
  }
}
