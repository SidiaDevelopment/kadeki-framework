import {IConfigContext} from "@kadeki/core/context";
import deepmerge from "deepmerge";
import {Context, createContext} from "@kadeki/core";

export class ConfigContext extends Context<IConfigContext> {
    addData(data: Partial<IConfigContext>) {
        if (!this.data)
            this.data = {} as IConfigContext;
        this.data = deepmerge(this.data, data);
    }
}

createContext(new ConfigContext());
