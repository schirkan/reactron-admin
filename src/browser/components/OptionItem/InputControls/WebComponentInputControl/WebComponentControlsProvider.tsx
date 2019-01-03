import * as SolidIcons from '@fortawesome/free-solid-svg-icons';
import { IFieldDefinition, IInputComponentProps } from '@schirkan/reactron-interfaces';
import { IInputControls, IInputControlsProvider } from '../IInputControls';
import WebComponentForm from './WebComponentForm';

export class WebComponentControlsProvider implements IInputControlsProvider {
  public match(definition: IFieldDefinition): boolean {
    return definition.valueType === 'webComponent';
  }

  public get(): IInputControls {
    return {
      icon: SolidIcons.faCube,
      detailsControl: WebComponentForm,
      inputControl: (props: IInputComponentProps) => {
        return props && props.value || 'none';
      }
    };
  }
}