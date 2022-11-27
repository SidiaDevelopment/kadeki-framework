import {IProviderContext} from "@kadeki/core/context";
import {Context} from "../Bases/Context"
import {createContext} from "../Hooks/createContext"

export class ProviderContext extends Context<IProviderContext> {

}

createContext(new ProviderContext());
