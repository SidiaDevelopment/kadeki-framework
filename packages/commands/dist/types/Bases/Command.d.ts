import { Ctors, IProvidableConfig, Providable } from "@kadeki/core";
import { Interaction } from "discord.js";
export interface IDiscordCommandConfig extends IProvidableConfig {
    tag: string;
    group?: string;
}
export declare abstract class Command extends Providable<IDiscordCommandConfig> {
    init(): Promise<void>;
    abstract handle(interaction: Interaction): Promise<void>;
}
export declare const command: (config: IDiscordCommandConfig) => (constructor: import("@kadeki/core").Ctor<Providable<IDiscordCommandConfig>>) => void;
declare module "@kadeki/core/module" {
    interface IModuleData {
        commands?: Ctors<Command>;
    }
}
