import { IInputComponentProps, IReactronComponentContext, IWebPageOptions } from '@schirkan/reactron-interfaces';
import * as React from 'react';

export interface IPageInputControlState {
  pages: IWebPageOptions[];
}

export class PageInputControl extends React.Component<IInputComponentProps, IPageInputControlState> {
  constructor(props: IInputComponentProps) {
    super(props);

    this.state = { pages: [] };

    this.onSelectValueChange = this.onSelectValueChange.bind(this);
  }

  public componentDidMount() {
    this.props.context.services.pages.getWebPages().then(pages => this.setState({ pages }));
  }

  private onSelectValueChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    this.props.valueChange(this.props.definition, e.currentTarget.value);
  };

  public render() {
    const options = this.state.pages.map(page => <option key={page.id} value={page.path}>{page.title} ({page.path})</option>);
    return (
      <select id={this.props.uniqueId} value={this.props.value} onChange={this.onSelectValueChange}>
        <option>Select page...</option>
        {options}
      </select>
    );
  }
}