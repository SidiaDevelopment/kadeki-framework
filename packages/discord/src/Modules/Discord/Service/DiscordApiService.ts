import {injectService, service, Service} from "@kadeki/core";
import {DiscordService} from "./DiscordService";
import {ClientEvents} from "discord.js";

export type DiscordEventCallback<T extends keyof ClientEvents> = (...args: ClientEvents[T]) => void;

interface ISubscribers {
    [id: string]: DiscordEventCallback<keyof ClientEvents>[]
}

@service({
    tag: "discordApi",
})
export class DiscordApiService extends Service {
    @injectService
    private discordService!: DiscordService;

    private subscribers: ISubscribers = {}

    public subscribe<T extends keyof ClientEvents>(name: T, callback: DiscordEventCallback<T>): void {
        if (!Object.prototype.hasOwnProperty.call(this.subscribers, name)) {
            this.subscribers[name] = [];

            const client = this.discordService.getClient();
            if (client)
                client.on(name, this.mapEvent(name));
        }

        this.subscribers[name].push(callback as DiscordEventCallback<keyof ClientEvents>);
    }

    private mapEvent<T extends keyof ClientEvents>(name: T) {
        return (...args: ClientEvents[T]) => {
            this.subscribers[name].forEach(e => e(...args))
        }
    }
}
