import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { IFieldDefinition, IInputComponentProps } from '@schirkan/reactron-interfaces';

export type controlType = (new (props: IInputComponentProps) => any) | ((props: IInputComponentProps) => any);

export interface IInputControls {
  icon?: IconProp;
  inputControl?: controlType;
  detailsControl?: controlType;
}

export interface IInputControlsProvider {
  match(definition: IFieldDefinition): boolean;
  get(definition: IFieldDefinition): IInputControls;
}