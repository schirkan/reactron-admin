import { IFieldDefinition } from '@schirkan/reactron-interfaces';
import { IInputControls, IInputControlsProvider } from '../IInputControls';
import { BooleanInputControl } from './BooleanInputControl';

export class BooleanControlsProvider implements IInputControlsProvider {
  public match(definition: IFieldDefinition): boolean {
    return definition.valueType === 'boolean';
  }

  public get(): IInputControls {
    return {
      inputControl: BooleanInputControl
    }
  }
}
