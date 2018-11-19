import { IReactronServiceDefinition } from "@schirkan/reactron-interfaces";
import { AdminService } from "./services/AdminService";

export const services: IReactronServiceDefinition[] = [{
    name: 'AdminService',
    displayName: 'Modules API',
    description: 'Registers Admin page on startup',
    service: AdminService
}];