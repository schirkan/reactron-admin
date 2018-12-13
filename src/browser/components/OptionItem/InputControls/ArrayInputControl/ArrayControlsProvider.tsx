import * as SolidIcons from '@fortawesome/free-solid-svg-icons';
import { IFieldDefinition, IInputComponentProps } from '@schirkan/reactron-interfaces';
import { IInputControls, IInputControlsProvider } from '../IInputControls';
import ArrayForm from './ArrayForm';

export class ArrayControlsProvider implements IInputControlsProvider {
  public match(definition: IFieldDefinition): boolean {
    return !!definition.isArray;
  }

  public get(): IInputControls {
    return {
      icon: SolidIcons.faList,
      detailsControl: ArrayForm,
      inputControl: (props: IInputComponentProps) => {
        const array = props && props.value as any[] || [];
        return '(' + array.length + ' items)';
      }
    };
  }
}