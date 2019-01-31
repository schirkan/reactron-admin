import * as RegularIcons from '@fortawesome/free-regular-svg-icons';
import * as SolidIcons from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IWebPageOptions, IReactronComponentContext } from '@schirkan/reactron-interfaces';
import * as React from 'react';
import { confirm } from '../confirmDialog';
import OptionCard from '../OptionCard/OptionCard';
import UiButton from '../UiButton/UiButton';
import UiCard from '../UiCard/UiCard';
import UiFlowLayout from '../UiFlowLayout/UiFlowLayout';
import UiLoadingCard from '../UiLoadingCard/UiLoadingCard';
import UiOverlay from '../UiOverlay/UiOverlay';
import PageCard from './PageCard/PageCard';
import { pageOptionsFields } from './pageOptionsFields';
import { AdminPageContext } from '../AdminPageContext';

import './PageManagerPage.scss';
import { WebComponentFormContext, WebComponentFormContextData } from '../OptionItem/InputControls/WebComponentInputControl/WebComponentFormContext';

export interface IModuleManagerPageState {
  loading: boolean;
  pages: IWebPageOptions[];
  showPageDetailsDialog: boolean;
  selectedPage?: IWebPageOptions;
}

export default class PageManagerPage extends React.Component<any, IModuleManagerPageState> {
  public static contextType = AdminPageContext;
  public context: IReactronComponentContext;

  constructor(props: any) {
    super(props);

    this.state = {
      loading: true,
      pages: [],
      showPageDetailsDialog: false
    };

    this.loadPages = this.loadPages.bind(this);
    this.savePage = this.savePage.bind(this);
    this.deletePage = this.deletePage.bind(this);
    this.hidePageDialog = this.hidePageDialog.bind(this);
    this.showPageEditDialog = this.showPageEditDialog.bind(this);
    this.showPageAddDialog = this.showPageAddDialog.bind(this);
  }

  public componentDidMount() {
    this.loadPages();
  }

  private loadPages(): Promise<void> {
    this.setState({ loading: true });

    return this.context.services.pages.getAll()
      .then(pages => this.setState({ pages, loading: false }))
      .catch(err => this.setState({ loading: false })); // TODO
  }

  private savePage(page: IWebPageOptions): Promise<void> {
    return this.context.services.pages.createOrUpdate(page)
      .then(this.hidePageDialog)
      .then(this.loadPages)
      .catch(err => console.log(err)); // TODO
  }

  private deletePage(page: IWebPageOptions): Promise<void> {
    return this.context.services.pages.delete(page.id)
      .then(this.hidePageDialog)
      .then(this.loadPages)
      .catch(err => console.log(err)); // TODO
  }

  private showPageEditDialog(page: IWebPageOptions) {
    this.setState({ showPageDetailsDialog: true, selectedPage: page });
  }

  private showPageAddDialog() {
    this.setState({ showPageDetailsDialog: true, selectedPage: undefined });
  }

  private hidePageDialog() {
    this.setState({ showPageDetailsDialog: false, selectedPage: undefined });
  }

  private renderPageCards() {
    if (this.state.loading) {
      return <UiFlowLayout><UiLoadingCard /></UiFlowLayout>;
    }

    return (
      <UiFlowLayout>
        {this.state.pages.map((item, index) =>
          <PageCard key={index} page={item} onEdit={this.showPageEditDialog}
            onDelete={confirm(this.deletePage, 'Delete?')} />
        )}
      </UiFlowLayout>
    );
  }

  private renderPageAddCard() {
    return (
      <UiFlowLayout>
        <UiCard className="AddPageCard">
          <UiButton className="addButton" onClick={this.showPageAddDialog}>
            <FontAwesomeIcon icon={SolidIcons.faPlus} /> Add Page
          </UiButton>
        </UiCard>
      </UiFlowLayout>
    );
  }

  private renderPageDetailsDialog() {
    if (!this.state.showPageDetailsDialog) {
      return null;
    }

    const page = this.state.selectedPage;
    const title = page ? 'Edit Page' : 'Add Page';

    return (
      <UiOverlay>
        <WebComponentFormContext.Provider value={new WebComponentFormContextData(undefined, page)}>
          <OptionCard icon={RegularIcons.faFile} showToggleStyleOptions={true}
            title={title} fields={pageOptionsFields}
            onSave={this.savePage} onCancel={this.hidePageDialog} options={page || {}} />
        </WebComponentFormContext.Provider>
      </UiOverlay>
    );
  }

  public render() {
    return (
      <section className="PageManagerPage">
        {this.renderPageAddCard()}
        {this.renderPageCards()}
        {this.renderPageDetailsDialog()}
      </section>
    );
  }
}
