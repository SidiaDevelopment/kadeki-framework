import { Provider } from "../Bases/Provider/Provider";
import { Module } from "../Bases/Module";
import { Service } from "../Bases/Service";
export declare class ServiceProvider extends Provider<Service> {
    protected getIdentifier(providable: Module): string;
}
declare module "@kadeki/core/context" {
    interface IProviderContext {
        serviceProvider: ServiceProvider;
    }
}
