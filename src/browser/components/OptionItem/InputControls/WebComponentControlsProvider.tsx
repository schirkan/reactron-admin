import * as RegularIcons from '@fortawesome/free-regular-svg-icons';
import { IFieldDefinition, IInputComponentProps } from '@schirkan/reactron-interfaces';
import WebComponentForm from '../WebComponentForm/WebComponentForm';
import { IInputControls, IInputControlsProvider } from './IInputControls';

export class WebComponentControlsProvider implements IInputControlsProvider {
  public match(definition: IFieldDefinition): boolean {
    return definition.valueType === 'webComponent';
  }

  public get(): IInputControls {
    return {
      icon: RegularIcons.faFile,
      detailsControl: WebComponentForm,
      inputControl: (props: IInputComponentProps) => {
        return props && props.value || '';
      }
    };
  }
}