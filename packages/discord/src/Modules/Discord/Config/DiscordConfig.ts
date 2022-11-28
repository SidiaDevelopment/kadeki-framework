import {Config, defaultConfig} from "@kadeki/config";
import {IntentsBitField, BitFieldResolvable, GatewayIntentsString} from "discord.js";

interface IDiscordConfig {
    discord: {
        key: string;
        intents: BitFieldResolvable<GatewayIntentsString, number>;
    }
}

declare module "@kadeki/core/context" {
    export interface IConfigContext extends IDiscordConfig {}
}


@defaultConfig
export class DiscordConfig extends Config<IDiscordConfig> {
    data: IDiscordConfig = {
        discord: {
            key: "",
            intents: [
                IntentsBitField.Flags.Guilds,
                IntentsBitField.Flags.GuildMembers,
                IntentsBitField.Flags.GuildBans,
                IntentsBitField.Flags.GuildEmojisAndStickers,
                IntentsBitField.Flags.GuildIntegrations,
                IntentsBitField.Flags.GuildWebhooks,
                IntentsBitField.Flags.GuildInvites,
                IntentsBitField.Flags.GuildVoiceStates,
                IntentsBitField.Flags.GuildPresences,
                IntentsBitField.Flags.GuildMessages,
                IntentsBitField.Flags.GuildMessageReactions,
                IntentsBitField.Flags.GuildMessageTyping,
                IntentsBitField.Flags.DirectMessages,
                IntentsBitField.Flags.DirectMessageReactions,
                IntentsBitField.Flags.DirectMessageTyping,
                IntentsBitField.Flags.MessageContent,
                IntentsBitField.Flags.GuildScheduledEvents,
            ]
        }
    }
}
