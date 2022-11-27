import { Ctor } from "../Utils/Ctor";
import { Context } from "../Bases/Context";
export declare const addContextData: <T extends Context<any>>(contextCtr: Ctor<T>, data: Partial<T["data"]>) => void;
