import { IReactronService, IReactronServiceContext, IWebComponentOptions, IWebPageOptions } from '@schirkan/reactron-interfaces';

export class AdminService implements IReactronService {
  public async start(context: IReactronServiceContext): Promise<void> {
    console.log('AdminService.start');

    const component: IWebComponentOptions = {
      id: 'reactron-admin',
      componentName: 'Admin',
      moduleName: 'reactron-admin',
      options: {}
    };

    // register component
    context.backendService.webComponentsManager.createOrUpdate(component);

    const page: IWebPageOptions = {
      id: 'reactron-admin-page',
      title: 'Admin',
      path: '/admin',
      webComponentId: 'reactron-admin',
      style: {}
    };

    // register page 
    context.backendService.webPageManager.createOrUpdate(page);
  }
}