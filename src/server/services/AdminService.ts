import { IReactronService, IReactronServiceContext, IWebComponentOptions, IWebPageOptions } from '@schirkan/reactron-interfaces';

export class AdminService implements IReactronService {
    public async start(context: IReactronServiceContext): Promise<void> {
        console.log('AdminService.start');

        // register admin page and component

        const adminComponent: IWebComponentOptions = {
            id: 'reactron-admin',
            componentName: 'Admin',
            moduleName: 'reactron-admin',
            options: {}
        };

        // const components = context.backendService.webComponentsManager.getAll();
        // if (!components.find(x => x.id === adminComponent.id)) {
            context.backendService.webComponentsManager.createOrUpdate(adminComponent);
        // }

        const adminPage: IWebPageOptions = {
            id: 'reactron-admin-page',
            title: 'Admin',
            path: '/admin',
            webComponentId: 'reactron-admin',
            style: {}
        };

        // const pages = context.backendService.webPageManager.getAll();
        // if (!pages.find(x => x.id === adminPage.id)) {
            context.backendService.webPageManager.createOrUpdate(adminPage);
        // }
    }
}