import {Context} from "../Bases/Context"
import {createContext} from "../Hooks/createContext"
import {IConfigContext} from "@kadeki/core/context";
import deepmerge from "deepmerge";

export class ConfigContext extends Context<IConfigContext> {
    addData(data: Partial<IConfigContext>) {
        if (!this.data)
            this.data = {} as IConfigContext;
        console.log(this.data, data);
        this.data = deepmerge(this.data, data);
    }
}

createContext(new ConfigContext());
