import { IFieldDefinition } from '@schirkan/reactron-interfaces';
import { IInputControls, IInputControlsProvider } from '../IInputControls';
import { PasswordInputControl } from './PasswordInputControl';

export class PasswordControlsProvider implements IInputControlsProvider {
  public match(definition: IFieldDefinition): boolean {
    return definition.valueType === 'password';
  }

  public get(): IInputControls {
    return {
      inputControl: PasswordInputControl
    };
  }
}
