import {IConfigContext} from "@kadeki/core/context";
import {Ctor} from "../../Utils/Ctor";
import {addContextData} from "../../Hooks/addContextData";
import {ConfigContext} from "../../Contexts/ConfigContext";

export abstract class Config<T> {
    public abstract data: T;
}

export const defaultConfig = (constructor: Ctor<Config<Partial<IConfigContext>>>) => {
    const instance = new constructor();
    addContextData(ConfigContext, instance.data);
}
