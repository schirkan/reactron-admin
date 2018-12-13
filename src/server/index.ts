import { IReactronServiceDefinition } from "@schirkan/reactron-interfaces";
import { AdminService } from "./services/AdminService";

export const services: IReactronServiceDefinition[] = [{
    name: 'AdminService',
    displayName: 'Admin Service',
    description: 'Registers Admin page on startup',
    service: AdminService
}];