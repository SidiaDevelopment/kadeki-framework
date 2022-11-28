import {Module} from "@kadeki/core";
import {Ctors} from "@kadeki/core";

import {DiscordModule} from "@kadeki/discord";
import {CommandsModule} from "@kadeki/commands";
import {PingModule} from "./Modules/Ping/PingModule";

export const modules: Ctors<Module> = [
    DiscordModule,
    PingModule,
    CommandsModule
]
