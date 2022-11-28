import {Provider} from "../Bases/Provider/Provider"
import {Module} from "../Bases/Module"
import {addContextData} from "../Hooks/addContextData";
import {ProviderContext} from "../Contexts/ProviderContext";
import {Ctor} from "../Utils/Ctor";

export class ModuleProvider extends Provider<Module> {
    protected getIdentifier(providable: Ctor<Module>): string {
        if (providable.prototype.config == null)
            throw new Error(`Trying to load unconfigured module: ${super.getIdentifier(providable)}, try adding the @module decorator`);

        return super.getIdentifier(providable);
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
