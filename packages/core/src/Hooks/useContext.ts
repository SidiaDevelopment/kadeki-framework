import {Ctor} from "../Utils/Ctor"
import {Context, ContextStorage} from "../Bases/Context"

export const useContext = <T extends Context<any>>(contextCtr: Ctor<T>): T["data"] => ContextStorage.get<T>(contextCtr);
