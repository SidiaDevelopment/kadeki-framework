import { Provider } from "../Bases/Provider/Provider";
import { Service } from "../Bases/Service/Service";
import { Ctor } from "../Utils/Ctor";
export declare class ServiceProvider extends Provider<Service> {
    protected getIdentifier(providable: Ctor<Service>): string;
}
declare module "@kadeki/core/context" {
    interface IProviderContext {
        serviceProvider: ServiceProvider;
    }
}
