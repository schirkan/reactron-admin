import { IReactronService, IReactronServiceContext, IServiceRepositoryItem } from '@schirkan/reactron-interfaces';
import { routes } from '../../common/apiRoutes';
import { registerRoute } from './registerRoute';

export class ServiceController implements IReactronService {
    public async start(context: IReactronServiceContext): Promise<void> {
        console.log('ServiceController.start');

        registerRoute(context.moduleApiRouter, routes.getServices, async (req, res) => {
            console.log('ServiceController.getAll');
            const result = await context.backendService.serviceRepository.getAll();
            const serviceInfos = result.map(item => {
                const { instance, service, ...serviceInfo } = item;
                return serviceInfo as IServiceRepositoryItem;
            });
            res.send(serviceInfos);
        });

        registerRoute(context.moduleApiRouter, routes.getServiceOptions, async (req, res) => {
            console.log('ServiceController.getServiceOptions');
            const result = context.backendService.serviceManager.getOptions(req.params.moduleName, req.params.serviceName);
            res.send(result);
        });

        registerRoute(context.moduleApiRouter, routes.setServiceOptions, async (req, res) => {
            console.log('ServiceController.setServiceOptions');
            await context.backendService.serviceManager.setOptions(req.params.moduleName, req.params.serviceName, req.body);
            res.sendStatus(204);
            // TODO: ex handling
        });
    }
}