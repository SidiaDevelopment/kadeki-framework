import {Provider} from "../Bases/Provider/Provider"
import {Module} from "../Bases/Module"
import {addContextData} from "../Hooks/addContextData";
import {ProviderContext} from "../Contexts/ProviderContext";
import {Service} from "../Bases/Service";
import {useContext} from "../Hooks/useContext";
import {Core} from "../Core";

export class ServiceProvider extends Provider<Service> {
    protected getIdentifier(providable: Module): string {
        if (providable.config == null)
            throw new Error(`Trying to load unconfigured service: ${super.getIdentifier(providable)}, try adding the @service decorator`);

        return providable.config.tag;
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

Module.onInit.addListener(({module}) => {
    const {serviceProvider} = useContext(ProviderContext);
    if (!module.data.services)
        return;

    serviceProvider.load(module.data.services);
})

Core.events.afterStart.addListener(async () => {
    const {serviceProvider} = useContext(ProviderContext);
    await serviceProvider.init();
})
