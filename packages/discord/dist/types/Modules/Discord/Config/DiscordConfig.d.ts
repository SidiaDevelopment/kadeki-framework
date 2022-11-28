import { Config } from "@kadeki/config";
import { BitFieldResolvable, GatewayIntentsString } from "discord.js";
interface IDiscordConfig {
    discord: {
        key: string;
        intents: BitFieldResolvable<GatewayIntentsString, number>;
    };
}
declare module "@kadeki/core/context" {
    interface IConfigContext extends IDiscordConfig {
    }
}
export declare class DiscordConfig extends Config<IDiscordConfig> {
    data: IDiscordConfig;
}
export {};
