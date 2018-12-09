import * as RegularIcons from '@fortawesome/free-regular-svg-icons';
import { IFieldDefinition, IInputComponentProps } from '@schirkan/reactron-interfaces';
import { IInputControls, IInputControlsProvider } from '../IInputControls';
import WebComponentForm from './WebComponentForm';

export class WebComponentControlsProvider implements IInputControlsProvider {
  public match(definition: IFieldDefinition): boolean {
    return definition.valueType === 'webComponent';
  }

  public get(): IInputControls {
    return {
      icon: RegularIcons.faFile,
      detailsControl: WebComponentForm,
      inputControl: (props: IInputComponentProps) => {
        return props && props.value || 'none';
      }
    };
  }
}