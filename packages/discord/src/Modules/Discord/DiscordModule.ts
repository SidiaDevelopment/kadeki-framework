import {module, Module} from "@kadeki/core";
import {IModuleData} from "@kadeki/core/module";
import {DiscordConfig} from "./Config/DiscordConfig";
import {DiscordService} from "./Service/DiscordService";
import {DiscordApiService} from "./Service/DiscordApiService";

@module({
    tag: "discord"
})
export class DiscordModule extends Module {
    data: IModuleData = {
        services: [
            DiscordService,
            DiscordApiService
        ],
        config: DiscordConfig
    }
}
