import {Ctor} from "../../Utils/Ctor"
import {RecursiveRequired} from "../../Utils/RequiredRecursive";

export abstract class Providable<ConfigT extends IProvidableConfig> {
    public config!: RecursiveRequired<ConfigT>;
    public abstract init(): Promise<void>;

    public get isLoaded() {
        return this.config != null;
    }
}

export enum InitPriority {
    High = 0,
    Normal = 1,
    Low = 2
}

export interface IProvidableConfig {
    priority?: InitPriority;
}

export const providableDecorator = <ConfigT extends IProvidableConfig>(defaultConfig: RecursiveRequired<ConfigT>) => {
    return (config: ConfigT) => {
        return (constructor: Ctor<Providable<ConfigT>>) => {
            constructor.prototype.config = {...defaultConfig, ...config};
        }
    }
}
