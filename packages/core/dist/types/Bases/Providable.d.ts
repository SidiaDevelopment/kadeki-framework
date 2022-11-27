import { Ctor } from "../Utils/Ctor";
export declare abstract class Providable<ConfigT extends IProvidableConfig> {
    config: ConfigT;
    abstract init(): Promise<void>;
    get isLoaded(): boolean;
}
export declare enum InitPriority {
    High = 0,
    Normal = 1,
    Low = 2
}
export interface IProvidableConfig {
    priority: InitPriority;
}
export declare const providableDecorator: <ConfigT extends IProvidableConfig>(defaultConfig: ConfigT) => (config: Partial<ConfigT>) => (constructor: Ctor<Providable<ConfigT>>) => void;
