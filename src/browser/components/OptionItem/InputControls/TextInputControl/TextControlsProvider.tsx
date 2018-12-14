import { IFieldDefinition, IInputComponentProps } from '@schirkan/reactron-interfaces';
import { IInputControls, IInputControlsProvider } from '../IInputControls';
import { TextAreaInputControl } from './TextAreaInputControl';
import { TextBoxInputControl } from './TextBoxInputControl';

export class TextControlsProvider implements IInputControlsProvider {
  public match(definition: IFieldDefinition): boolean {
    return definition.valueType === 'string';
  }

  public get(definition: IFieldDefinition): IInputControls {
    if (definition.textRows !== undefined && definition.textRows > 1) {
      return {
        detailsControl: TextAreaInputControl,
        inputControl: (props: IInputComponentProps) => props && props.value
      };
    }

    return {
      inputControl: TextBoxInputControl
    };
  }
}
