import { IReactronService, IReactronServiceContext, IWebComponentOptions, IWebPageOptions } from '@schirkan/reactron-interfaces';

export class AdminService implements IReactronService {
  public async start(context: IReactronServiceContext): Promise<void> {
    context.log.debug('test debug');
    context.log.info('test info');
    context.log.warning('test warning');
    context.log.error('test error');

    const page: IWebPageOptions = {
      id: 'reactron-admin-page',
      title: 'Admin',
      path: '/admin',
      webComponentId: 'reactron-admin',
      style: {}
    };

    // register page 
    context.backendService.webPageManager.createOrUpdate(page);

    const component: IWebComponentOptions = {
      id: 'reactron-admin',
      parentId: page.id,
      componentName: 'Admin',
      moduleName: 'reactron-admin',
      options: {}
    };

    // register component
    context.backendService.webComponentsManager.createOrUpdate(component);
  }
}