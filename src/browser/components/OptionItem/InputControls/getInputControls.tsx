import { IFieldDefinition, IInputComponentProps, IReactronComponentContext } from '@schirkan/reactron-interfaces';
import { ArrayControlsProvider } from './ArrayControlsProvider';
import { BooleanControlsProvider } from './BooleanControlsProvider';
import { IInputControls, IInputControlsProvider } from './IInputControls';
import { NumberControlsProvider } from './NumberControlsProvider';
import { ObjectControlsProvider } from './ObjectControlsProvider';
import { StyleControlsProvider } from './StyleControlsProvider';
import { TextControlsProvider } from './TextControlsProvider';
import { ValuesControlsProvider } from './ValuesControlsProvider';
import { WebComponentControlsProvider } from './WebComponentControlsProvider';

const providers: IInputControlsProvider[] = [
  new ArrayControlsProvider(),
  new ValuesControlsProvider(),
  new ObjectControlsProvider(),
  new StyleControlsProvider(),
  new WebComponentControlsProvider(),
  new BooleanControlsProvider(),
  new TextControlsProvider(),
  new NumberControlsProvider(),
];

export const getInputControls = (definition: IFieldDefinition, context: IReactronComponentContext): IInputControls => {
  const provider = providers.find(x => x.match(definition));
  const result = provider && provider.get(definition) || {};

  if (definition.inputControl) {
    result.inputControl = (props: IInputComponentProps) => context.renderComponent({
      ...definition.inputControl,
      options: props
    });
  }

  if (definition.inputForm) {
    result.detailsControl = (props: IInputComponentProps) => context.renderComponent({
      ...definition.inputForm,
      options: props
    });
  }

  return result;
};