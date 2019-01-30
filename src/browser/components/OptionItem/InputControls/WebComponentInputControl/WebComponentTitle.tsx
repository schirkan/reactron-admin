import { IInputComponentProps } from '@schirkan/reactron-interfaces';
import * as React from 'react';
import { OptionCardContext, OptionsCardContextData } from 'src/browser/components/OptionCard/OptionCardContext';

export default class WebComponentTitle extends React.Component<IInputComponentProps<string>> {
  public static contextType = OptionCardContext;
  public context: OptionsCardContextData;

  public render() {
    const componentId = this.props.value;
    if (!componentId) {
      return null;
    }
    const component = this.context.getAllComponents().find(x => x.id === componentId);
    if (!component) {
      return null;
    }

    const componentKey = component.moduleName + '.' + component.componentName;
    const componentDefinition = this.context.componentDefinitions.find(x => x.key === componentKey);
    if (!componentDefinition) {
      return null;
    }
    
    return componentDefinition.definition.displayName;
  }
}
