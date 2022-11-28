import {Ctors, InitPriority, IProvidableConfig, Providable, providableDecorator} from "@kadeki/core";
import {Interaction} from "discord.js";

export interface IDiscordCommandConfig extends IProvidableConfig {
    tag: string;
    group?: string;
}

export abstract class Command extends Providable<IDiscordCommandConfig> {
    public async init(): Promise<void> {};
    public abstract handle(interaction: Interaction): Promise<void>;
}

export const command = providableDecorator<IDiscordCommandConfig>({
    priority: InitPriority.Normal,
    tag: "",
    group: "",
})

declare module "@kadeki/core/module" {
    interface IModuleData {
        commands?: Ctors<Command>;
    }
}
