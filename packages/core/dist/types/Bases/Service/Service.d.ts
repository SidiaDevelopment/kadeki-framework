import { IProvidableConfig, Providable } from "../Provider/Providable";
import { Ctors } from "../../Utils/Ctor";
export interface IServiceConfig extends IProvidableConfig {
    tag: string;
}
export declare abstract class Service extends Providable<IServiceConfig> {
    init(): Promise<void>;
}
export declare const service: (config: IServiceConfig) => (constructor: import("../../Utils/Ctor").Ctor<Providable<IServiceConfig>>) => void;
declare module "@kadeki/core/module" {
    interface IModuleData {
        services?: Ctors<Service>;
    }
}
