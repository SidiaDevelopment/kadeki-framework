import {InitPriority, IProvidableConfig, Providable, providableDecorator} from "./Provider/Providable";
import {Ctors} from "../Utils/Ctor";

export interface IServiceConfig extends IProvidableConfig {
    tag: string;
}

export abstract class Service extends Providable<IServiceConfig> {
    public async init(): Promise<void> {

    }
}

export const service = providableDecorator<IServiceConfig>({
    priority: InitPriority.Normal,
    tag: ""
})

declare module "@kadeki/core/module" {
    interface IModuleData {
        services?: Ctors<Service>;
    }
}
