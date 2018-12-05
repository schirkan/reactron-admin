import { IFieldDefinition, IInputComponentProps } from '@schirkan/reactron-interfaces';
import * as React from 'react';
import OptionList from '../../OptionList/OptionList';
import { IInputControls, IInputControlsProvider } from './IInputControls';

export class ObjectControlsProvider implements IInputControlsProvider {
  public match(definition: IFieldDefinition): boolean {
    return definition.valueType === 'object';
  }

  public get(): IInputControls {
    return {
      detailsControl: ObjectInputControl,
      // inputControl: 
    };
  }
}

// tslint:disable-next-line:max-classes-per-file
class ObjectInputControl extends React.Component<IInputComponentProps>{
  constructor(props: IInputComponentProps) {
    super(props);
    this.triggerValueChange = this.triggerValueChange.bind(this);
  }

  private triggerValueChange(newValue: any) {
    this.props.valueChange(this.props.definition, newValue);
  }

  public render() {
    return (
      <OptionList fields={this.props.definition.fields} value={this.props.value} valueChange={this.triggerValueChange} />
    );
  }
}