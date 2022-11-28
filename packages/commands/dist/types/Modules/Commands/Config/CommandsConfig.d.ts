import { Config } from "@kadeki/config";
interface ICommandsConfig {
    commands: {
        updateOnStart: boolean;
    };
}
declare module "@kadeki/core/context" {
    interface IConfigContext extends ICommandsConfig {
    }
}
export declare class CommandsConfig extends Config<ICommandsConfig> {
    data: ICommandsConfig;
}
export {};
