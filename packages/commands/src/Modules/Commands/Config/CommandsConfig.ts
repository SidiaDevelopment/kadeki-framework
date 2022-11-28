import {Config, defaultConfig} from "@kadeki/config";

interface ICommandsConfig {
    commands: {
        updateOnStart: boolean
    }
}

declare module "@kadeki/core/context" {
    export interface IConfigContext extends ICommandsConfig {}
}


@defaultConfig
export class CommandsConfig extends Config<ICommandsConfig> {
    data: ICommandsConfig = {
        commands: {
            updateOnStart: false
        }
    }
}
