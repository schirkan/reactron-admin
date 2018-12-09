import { IFieldDefinition, IInputComponentProps, IReactronComponentContext } from '@schirkan/reactron-interfaces';
import { ArrayControlsProvider } from './ArrayInputControl/ArrayControlsProvider';
import { BooleanControlsProvider } from './BooleanInputControl/BooleanControlsProvider';
import { IInputControls, IInputControlsProvider } from './IInputControls';
import { NumberControlsProvider } from './NumberControlsProvider';
import { ObjectControlsProvider } from './ObjectControlsProvider';
import { StyleControlsProvider } from './StyleInputControl/StyleControlsProvider';
import { TextControlsProvider } from './TextControlsProvider';
import { ValuesControlsProvider } from './ValuesInputControl/ValuesControlsProvider';
import { WebComponentControlsProvider } from './WebComponentInputControl/WebComponentControlsProvider';

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

  if (!definition.isArray) {
    if (definition.inputControl) {
      if (typeof definition.inputControl === 'function') {
        result.inputControl = definition.inputControl;
      } else if (definition.inputControl.module && definition.inputControl.component) {
        const moduleName = definition.inputControl.module;
        const componentName = definition.inputControl.component;
        result.inputControl = (props: IInputComponentProps) => context.renderComponent({ moduleName, componentName, options: props });
      }
    }

    if (definition.inputForm) {
      if (typeof definition.inputForm === 'function') {
        result.detailsControl = definition.inputForm;
      } else if (definition.inputForm.module && definition.inputForm.component) {
        const moduleName = definition.inputForm.module;
        const componentName = definition.inputForm.component;
        result.detailsControl = (props: IInputComponentProps) => context.renderComponent({ moduleName, componentName, options: props });
      }
    }
  }

  return result;
};