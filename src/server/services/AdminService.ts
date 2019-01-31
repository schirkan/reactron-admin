import { IReactronService, IReactronServiceContext, IWebComponentOptions, IWebPageOptions } from '@schirkan/reactron-interfaces';

export class AdminService implements IReactronService {
  public async start(context: IReactronServiceContext): Promise<void> {
    const page: IWebPageOptions = {
      id: 'reactron-admin-page',
      title: 'Admin',
      path: '/admin',
      webComponentId: 'reactron-admin',
      style: {}
    };

    // register page 
    context.services.pages.createOrUpdate(page);

    const component: IWebComponentOptions = {
      id: 'reactron-admin',
      parentId: page.id,
      componentName: 'Admin',
      moduleName: 'reactron-admin',
      options: {}
    };

    // register component
    context.services.components.createOrUpdate(component);
  }
}