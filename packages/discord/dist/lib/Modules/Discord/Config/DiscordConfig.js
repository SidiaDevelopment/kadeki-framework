"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscordConfig = void 0;
const config_1 = require("@kadeki/config");
const discord_js_1 = require("discord.js");
let DiscordConfig = class DiscordConfig extends config_1.Config {
    constructor() {
        super(...arguments);
        this.data = {
            discord: {
                key: "",
                intents: [
                    discord_js_1.IntentsBitField.Flags.Guilds,
                    discord_js_1.IntentsBitField.Flags.GuildMembers,
                    discord_js_1.IntentsBitField.Flags.GuildBans,
                    discord_js_1.IntentsBitField.Flags.GuildEmojisAndStickers,
                    discord_js_1.IntentsBitField.Flags.GuildIntegrations,
                    discord_js_1.IntentsBitField.Flags.GuildWebhooks,
                    discord_js_1.IntentsBitField.Flags.GuildInvites,
                    discord_js_1.IntentsBitField.Flags.GuildVoiceStates,
                    discord_js_1.IntentsBitField.Flags.GuildPresences,
                    discord_js_1.IntentsBitField.Flags.GuildMessages,
                    discord_js_1.IntentsBitField.Flags.GuildMessageReactions,
                    discord_js_1.IntentsBitField.Flags.GuildMessageTyping,
                    discord_js_1.IntentsBitField.Flags.DirectMessages,
                    discord_js_1.IntentsBitField.Flags.DirectMessageReactions,
                    discord_js_1.IntentsBitField.Flags.DirectMessageTyping,
                    discord_js_1.IntentsBitField.Flags.MessageContent,
                    discord_js_1.IntentsBitField.Flags.GuildScheduledEvents,
                ]
            }
        };
    }
};
DiscordConfig = __decorate([
    config_1.defaultConfig
], DiscordConfig);
exports.DiscordConfig = DiscordConfig;
//# sourceMappingURL=DiscordConfig.js.map