import {module, Module} from "@kadeki/core";
import {IModuleData} from "@kadeki/core/module";
import {CommandsService} from "./Services/CommandsService";
import {UpdateCommandsService} from "./Services/UpdateCommandsService";
import {UpdateCommandsCommand} from "./Commands/UpdateCommandsCommand";

@module({
    tag: "commands"
})
export class CommandsModule extends Module {
    data: IModuleData = {
        commands: [
            UpdateCommandsCommand,
        ],
        services: [
            CommandsService,
            UpdateCommandsService,
        ],
    }
}
