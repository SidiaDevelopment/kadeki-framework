import { IConfigContext } from "@kadeki/core/context";
import { Ctor, Ctors } from "@kadeki/core";
export declare abstract class Config<T> {
    abstract data: T;
}
export declare const defaultConfig: (constructor: Ctor<Config<Partial<IConfigContext>>>) => void;
declare module "@kadeki/core/module" {
    interface IModuleData {
        config?: Ctor<Config<any>> | Ctors<Config<any>>;
    }
}
