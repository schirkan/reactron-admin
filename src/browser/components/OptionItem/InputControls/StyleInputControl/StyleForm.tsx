import * as RegularIcons from '@fortawesome/free-regular-svg-icons';
import * as SolidIcons from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IFieldDefinition, IInputComponentProps } from '@schirkan/reactron-interfaces';
import * as React from 'react';
import UiButton from '../../../UiButton/UiButton';
import OptionItem from '../../OptionItem';

import './StyleForm.scss';

const styleProperties = ['background', 'backgroundAttachment', 'backgroundColor', 'backgroundImage',
  'backgroundPosition', 'backgroundRepeat', 'border', 'borderBottom',
  'borderBottomColor', 'borderBottomStyle', 'borderBottomWidth', 'borderColor',
  'borderLeft', 'borderLeftColor', 'borderLeftStyle', 'borderLeftWidth',
  'borderRight', 'borderRightColor', 'borderRightStyle', 'borderRightWidth',
  'borderStyle', 'borderTop', 'borderTopColor', 'borderTopStyle',
  'borderTopWidth', 'borderWidth', 'clear', 'clip',
  'color', 'cursor', 'display', 'filter',
  'cssFloat', 'font', 'fontFamily', 'fontSize',
  'fontVariant', 'fontWeight', 'height', 'left',
  'letterSpacing', 'lineHeight', 'listStyle', 'listStyleImage',
  'listStylePosition', 'listStyleType', 'margin', 'marginBottom',
  'marginLeft', 'marginRight', 'marginTop', 'overflow',
  'padding', 'paddingBottom', 'paddingLeft', 'paddingRight',
  'paddingTop', 'pageBreakAfter', 'pageBreakBefore', 'position',
  'strokeDasharray', 'strokeDashoffset', 'strokeWidth', 'textAlign',
  'textDecoration', 'textIndent', 'textTransform', 'top',
  'verticalAlign', 'visibility', 'width', 'zIndex'];

interface IStyleFormState {
  fields: IFieldDefinition[];
}

export default class StyleForm extends React.Component<IInputComponentProps, IStyleFormState> {
  private newPropertySelect: HTMLSelectElement | null;

  constructor(props: IInputComponentProps) {
    super(props);

    this.state = {
      fields: this.getFields(this.props.value)
    };

    this.addField = this.addField.bind(this);
    this.valueChange = this.valueChange.bind(this);
  }

  public componentDidUpdate(prevProps: IInputComponentProps) {
    if (prevProps !== this.props) {
      this.setState({ fields: this.getFields(this.props.value) });
    }
  }

  private getFields(obj: object): IFieldDefinition[] {
    const fields: IFieldDefinition[] = [];

    if (obj) {
      Object.keys(obj).forEach(name => {
        const field: IFieldDefinition = {
          name,
          displayName: name,
          valueType: 'string',
        };
        fields.push(field);
      });
    }

    return fields;
  }

  private valueChange(field: IFieldDefinition, value: any) {
    const newValue = { ...this.props.value };
    newValue[field.name] = value;
    this.props.valueChange(this.props.definition, newValue);
  }

  private removeField(fieldName: string) {
    const newValue = { ...this.props.value };
    delete (newValue[fieldName]);
    this.props.valueChange(this.props.definition, newValue);
  }

  private addField() {
    if (!this.newPropertySelect) {
      return;
    }

    const fieldName = this.newPropertySelect.value;

    if (!fieldName || this.props.value && this.props.value.hasOwnProperty(fieldName)) {
      return;
    }

    const newValue = { ...this.props.value };
    newValue[fieldName] = '';
    this.props.valueChange(this.props.definition, newValue);
  }

  public render() {
    return (
      <div className="StyleForm">
        {this.state.fields.map(field => {
          const value = this.props.value && this.props.value[field.name];
          return (
            <OptionItem key={field.name} definition={field} value={value} valueChange={this.valueChange} >
              <UiButton onClick={this.removeField.bind(this, field.name)}>
                <FontAwesomeIcon icon={RegularIcons.faTrashAlt} />
              </UiButton>
            </OptionItem>
          );
        })}
        <div className="newPropertyRow">
          <select ref={el => this.newPropertySelect = el}>
            {styleProperties.map(property => <option key={property} value={property}>{property}</option>)}
          </select>
          <UiButton onClick={this.addField}>
            <FontAwesomeIcon icon={SolidIcons.faPlus} /> Add
          </UiButton>
        </div>
      </div>
    );
  }
}
