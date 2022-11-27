import {Ctor} from "../Utils/Ctor"
import {Context, ContextStorage} from "../Bases/Context"

export const addContextData = <T extends Context<any>>(contextCtr: Ctor<T>, data: Partial<T["data"]>) => ContextStorage.registerValues<T>(contextCtr, data);
