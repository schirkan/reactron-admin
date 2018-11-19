import * as RegularIcons from '@fortawesome/free-regular-svg-icons';
import * as SolidIcons from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IFieldDefinition, IInputComponentProps } from '@schirkan/reactron-interfaces';
import { Guid } from 'guid-typescript';
import * as React from 'react';
import { getDefaultFieldValue } from 'src/common/optionsHelper';
import UiButton from '../../UiButton/UiButton';
import OptionItem from '../OptionItem';

import './ArrayForm.css';

export default class ArrayForm extends React.Component<IInputComponentProps> {
  private arrayKeys: string[] = [];

  constructor(props: IInputComponentProps) {
    super(props);

    this.arrayItemAdd = this.arrayItemAdd.bind(this);
    this.arrayItemRemove = this.arrayItemRemove.bind(this);
    this.arrayItemMoveUp = this.arrayItemMoveUp.bind(this);
    this.arrayItemMoveDown = this.arrayItemMoveDown.bind(this);
  }

  private arrayItemChange(index: number, definition: IFieldDefinition, newValue: any) {
    let array = this.props.value || [];
    array = array.slice();
    array[index] = newValue;
    this.props.valueChange(this.props.definition, array);
  }

  private arrayItemRemove(index: number) {
    let array = this.props.value || [];
    array = array.slice();
    array.splice(index, 1);
    this.arrayKeys.splice(index, 1);
    this.props.valueChange(this.props.definition, array);
  }

  private arrayItemMoveUp(index: number) {
    const array = this.props.value || [];

    if (index === 0) {
      return;
    }

    const item = array.splice(index, 1)[0];
    array.splice(index - 1, 0, item);

    const keyItem = this.arrayKeys.splice(index, 1)[0];
    this.arrayKeys.splice(index - 1, 0, keyItem);

    this.props.valueChange(this.props.definition, array);
  }

  private arrayItemMoveDown(index: number) {
    const array = this.props.value || [];

    if (index === array.length - 1) {
      return;
    }

    const item = array.splice(index, 1)[0];
    array.splice(index + 1, 0, item);

    const keyItem = this.arrayKeys.splice(index, 1)[0];
    this.arrayKeys.splice(index + 1, 0, keyItem);

    this.props.valueChange(this.props.definition, array);
  }

  private arrayItemAdd() {
    const arrayItemDefinition = { ...this.props.definition };
    arrayItemDefinition.isArray = false;

    let array = this.props.value || [];
    array = array.slice();
    array.push(getDefaultFieldValue(arrayItemDefinition));
    this.props.valueChange(this.props.definition, array);
  }

  private renderArrayItem(value: any, index: number) {
    const arrayItemDefinition = { ...this.props.definition };
    arrayItemDefinition.isArray = false;
    arrayItemDefinition.displayName = 'Item ' + (index + 1);

    let key = this.arrayKeys[index];
    if (!key) {
      key = this.arrayKeys[index] = Guid.raw();
    }

    return (
      <React.Fragment key={key}>
        <OptionItem definition={arrayItemDefinition} value={value}
          valueChange={this.arrayItemChange.bind(this, index)} >
          <UiButton onClick={this.arrayItemRemove.bind(this, index)}>
            <FontAwesomeIcon icon={RegularIcons.faTrashAlt} />
          </UiButton>
          <UiButton onClick={this.arrayItemMoveUp.bind(this, index)}>
            <FontAwesomeIcon icon={RegularIcons.faArrowAltCircleUp} />
          </UiButton>
          <UiButton onClick={this.arrayItemMoveDown.bind(this, index)}>
            <FontAwesomeIcon icon={RegularIcons.faArrowAltCircleDown} />
          </UiButton>
        </OptionItem>
      </React.Fragment>
    );
  }

  public render() {
    const array: any[] = this.props.value || [];
    return (
      <React.Fragment>
        {array.map((value, index) => this.renderArrayItem(value, index))}
        <UiButton className="add-array-item" onClick={this.arrayItemAdd}>
          <FontAwesomeIcon icon={SolidIcons.faPlus} /> Add item
        </UiButton>
      </React.Fragment>
    );
  }
}
