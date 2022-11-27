import {Ctor} from "../../Utils/Ctor"

export abstract class Providable<ConfigT extends IProvidableConfig> {
    public config!: ConfigT;
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
    priority: InitPriority;
}

export const providableDecorator = <ConfigT extends IProvidableConfig>(defaultConfig: ConfigT) => {
    return (config: Partial<ConfigT>) => {
        return (constructor: Ctor<Providable<ConfigT>>) => {
            constructor.prototype.config = {...defaultConfig, ...config};
        }
    }
}
