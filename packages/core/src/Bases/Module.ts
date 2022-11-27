import {IModuleData} from "@kadeki/core/module";

import {InitPriority, IProvidableConfig, Providable, providableDecorator} from "./Provider/Providable";
import {Ctors} from "../Utils/Ctor";
import {EventListener} from "./EventListener";

declare module "@kadeki/core/module" {
    interface IModuleData {
        submodules?: Ctors<Module>;
    }
}

export interface IModuleConfig extends IProvidableConfig {
    tag: string;
}

export abstract class Module extends Providable<IModuleConfig> {
    public static onInit: EventListener<{module: Module}> = new EventListener<{module: Module}>();

    public abstract data: IModuleData;

    public async init(): Promise<void> {
        Module.onInit.emit({module: this});
    }
}

export const module = providableDecorator<IModuleConfig>({
    priority: InitPriority.Normal,
    tag: ""
})
