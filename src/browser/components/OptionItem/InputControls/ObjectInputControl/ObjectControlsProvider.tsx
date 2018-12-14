import { IFieldDefinition } from '@schirkan/reactron-interfaces';
import { IInputControls, IInputControlsProvider } from '../IInputControls';
import { ObjectInputControl } from './ObjectInputControl';

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