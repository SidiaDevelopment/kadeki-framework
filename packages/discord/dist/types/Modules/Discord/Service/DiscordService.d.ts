import { Service } from "@kadeki/core";
import { Client } from "discord.js";
export declare class DiscordService extends Service {
    private client;
    init(): Promise<void>;
    getClient(): Client | null;
}
