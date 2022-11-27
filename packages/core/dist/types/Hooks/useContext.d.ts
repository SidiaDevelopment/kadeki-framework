import { Ctor } from "../Utils/Ctor";
import { Context } from "../Bases/Context";
export declare const useContext: <T extends Context<any>>(contextCtr: Ctor<T>) => T["data"];
