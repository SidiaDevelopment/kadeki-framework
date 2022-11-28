import {IConfigContext} from "@kadeki/core/context";
import {ConfigContext} from "../../Contexts/ConfigContext";
import {addContextData, Ctor, Ctors} from "@kadeki/core";

export abstract class Config<T> {
    public abstract data: T;
}

export const defaultConfig = (constructor: Ctor<Config<Partial<IConfigContext>>>) => {
    const instance = new constructor();
    addContextData(ConfigContext, instance.data);
}

declare module "@kadeki/core/module" {
    export interface IModuleData {
        config?: Ctor<Config<any>> | Ctors<Config<any>>;
    }
}
