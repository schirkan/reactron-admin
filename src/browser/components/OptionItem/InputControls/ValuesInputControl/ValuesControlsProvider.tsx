import { IFieldDefinition } from '@schirkan/reactron-interfaces';
import { IInputControls, IInputControlsProvider } from '../IInputControls';
import { ValuesInputControl } from './ValuesInputControl';

export class ValuesControlsProvider implements IInputControlsProvider {
  public match(definition: IFieldDefinition): boolean {
    return !!(definition.values && definition.values.length);
  }

  public get(): IInputControls {
    return {
      inputControl: ValuesInputControl
    };
  }
}