import {module, Module} from "@kadeki/core";
import {IModuleData} from "@kadeki/core/module";
import {PingService} from "./Services/PingService";
import {PingConfig} from "./Config/PingConfig";

@module({
    tag: "ping"
})
export class PingModule extends Module {
    data: IModuleData = {
        services: [
            PingService
        ],
        config: PingConfig
    }
}
