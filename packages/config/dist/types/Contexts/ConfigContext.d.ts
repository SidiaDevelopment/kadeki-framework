import { IConfigContext } from "@kadeki/core/context";
import { Context } from "@kadeki/core";
export declare class ConfigContext extends Context<IConfigContext> {
    addData(data: Partial<IConfigContext>): void;
}
