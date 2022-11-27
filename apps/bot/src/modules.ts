import {Module} from "@kadeki/core";
import {Ctors} from "@kadeki/core";

import {PingModule} from "./Modules/Ping/PingModule";

export const modules: Ctors<Module> = [
    PingModule
]
