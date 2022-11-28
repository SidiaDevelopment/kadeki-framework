import { Provider } from "../Bases/Provider/Provider";
import { Module } from "../Bases/Module";
import { Ctor } from "../Utils/Ctor";
export declare class ModuleProvider extends Provider<Module> {
    protected getIdentifier(providable: Ctor<Module>): string;
}
declare module "@kadeki/core/context" {
    interface IProviderContext {
        moduleProvider: ModuleProvider;
    }
}
