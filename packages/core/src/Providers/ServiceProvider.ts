import {Provider} from "../Bases/Provider/Provider"
import {Module} from "../Bases/Module"
import {addContextData} from "../Hooks/addContextData";
import {ProviderContext} from "../Contexts/ProviderContext";
import {Service} from "../Bases/Service/Service";
import {useContext} from "../Hooks/useContext";
import {Core} from "../Core";
import {Ctor} from "../Utils/Ctor";

export class ServiceProvider extends Provider<Service> {
    protected getIdentifier(providable: Ctor<Service>): string {
        if (providable.prototype.config == null)
            throw new Error(`Trying to load unconfigured service: ${super.getIdentifier(providable)}, try adding the @service decorator`);

        return super.getIdentifier(providable);
    }
}

declare module "@kadeki/core/context" {
    export interface IProviderContext {
        serviceProvider: ServiceProvider;
    }
}

addContextData(ProviderContext, {
    serviceProvider: new ServiceProvider()
})

Module.onInit.addListener(async ({module}) => {
    const {serviceProvider} = useContext(ProviderContext);
    if (!module.data.services)
        return;

    serviceProvider.load(module.data.services);
})

Core.events.beforeStart.addListener(async () => {
    const {serviceProvider} = useContext(ProviderContext);
    await serviceProvider.init();
})
