import { Context } from "../Bases/Context";
import { IConfigContext } from "@kadeki/core/context";
export declare class ConfigContext extends Context<IConfigContext> {
    addData(data: Partial<IConfigContext>): void;
}
