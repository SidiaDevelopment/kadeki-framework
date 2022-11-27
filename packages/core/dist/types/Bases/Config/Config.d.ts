import { IConfigContext } from "@kadeki/core/context";
import { Ctor } from "../../Utils/Ctor";
export declare abstract class Config<T> {
    abstract data: T;
}
export declare const defaultConfig: (constructor: Ctor<Config<Partial<IConfigContext>>>) => void;
