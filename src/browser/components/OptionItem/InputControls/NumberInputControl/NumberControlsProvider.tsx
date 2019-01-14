import { IFieldDefinition } from '@schirkan/reactron-interfaces';
import { IInputControls, IInputControlsProvider } from '../IInputControls';
import { NumberInputControl } from './NumberInputControl';
import { RangeInputControl } from './RangeInputControl';

export class NumberControlsProvider implements IInputControlsProvider {
  public match(definition: IFieldDefinition): boolean {
    return definition.valueType === 'number';
  }

  public get(definition: IFieldDefinition): IInputControls {
    if (definition.minValue !== undefined && definition.maxValue !== undefined && definition.stepSize !== undefined) {
      return {
        inputControl: NumberInputControl,
        detailsControl: RangeInputControl
      };
    }

    return {
      inputControl: NumberInputControl
    };
  }
}