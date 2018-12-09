import * as BrandIcons from '@fortawesome/free-brands-svg-icons';
import { IFieldDefinition, IInputComponentProps } from '@schirkan/reactron-interfaces';
import { IInputControls, IInputControlsProvider } from '../IInputControls';
import StyleForm from './StyleForm';

export class StyleControlsProvider implements IInputControlsProvider {
  public match(definition: IFieldDefinition): boolean {
    return definition.valueType === 'style';
  }

  public get(): IInputControls {
    return {
      icon: BrandIcons.faCss3,
      detailsControl: StyleForm,
      inputControl: (props: IInputComponentProps) => {
        const text = JSON.stringify(props.value) || '';
        return text === '{}' ? '' : text;
      }
    };
  }
}