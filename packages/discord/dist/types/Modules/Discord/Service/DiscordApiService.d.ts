import { Service } from "@kadeki/core";
import { ClientEvents } from "discord.js";
export type DiscordEventCallback<T extends keyof ClientEvents> = (...args: ClientEvents[T]) => void;
export declare class DiscordApiService extends Service {
    private discordService;
    private subscribers;
    subscribe<T extends keyof ClientEvents>(name: T, callback: DiscordEventCallback<T>): void;
    private mapEvent;
}
