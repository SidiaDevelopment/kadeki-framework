import { Service } from "@kadeki/core";
import { DiscordApiService } from "@kadeki/discord";
export declare class CommandsService extends Service {
    discordApiService: DiscordApiService;
    init(): Promise<void>;
    private onInteraction;
}
