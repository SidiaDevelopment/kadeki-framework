import { Provider } from "../Bases/Provider/Provider";
import { Module } from "../Bases/Module";
export declare class ModuleProvider extends Provider<Module> {
    protected getIdentifier(providable: Module): string;
}
declare module "@kadeki/core/context" {
    interface IProviderContext {
        moduleProvider: ModuleProvider;
    }
}
