import {Provider} from "../Bases/Provider/Provider"
import {Module} from "../Bases/Module"
import {addContextData} from "../Hooks/addContextData";
import {ProviderContext} from "../Contexts/ProviderContext";

export class ModuleProvider extends Provider<Module> {
    protected getIdentifier(providable: Module): string {
        if (providable.config == null)
            throw new Error(`Trying to load unconfigured module: ${super.getIdentifier(providable)}, try adding the @module decorator`);

        return providable.config.tag;
    }
}

declare module "@kadeki/core/context" {
    export interface IProviderContext {
        moduleProvider: ModuleProvider;
    }
}

addContextData(ProviderContext, {
    moduleProvider: new ModuleProvider()
})
