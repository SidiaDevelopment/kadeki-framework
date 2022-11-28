import { IModuleData } from "@kadeki/core/module";
import { IProvidableConfig, Providable } from "./Provider/Providable";
import { Ctors } from "../Utils/Ctor";
import { EventListener } from "./EventListener";
declare module "@kadeki/core/module" {
    interface IModuleData {
        submodules?: Ctors<Module>;
    }
}
export interface IModuleConfig extends IProvidableConfig {
    tag: string;
}
export declare abstract class Module extends Providable<IModuleConfig> {
    static onInit: EventListener<{
        module: Module;
    }>;
    abstract data: IModuleData;
    init(): Promise<void>;
}
export declare const module: (config: IModuleConfig) => (constructor: import("../Utils/Ctor").Ctor<Providable<IModuleConfig>>) => void;
