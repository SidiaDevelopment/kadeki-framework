import {Config, defaultConfig} from "@kadeki/config";
import {LogLevel} from "@kadeki/core";

interface ILoggerConfig {
    logger: {
        logLevel: LogLevel;
        logName: string;
    }
}

declare module "@kadeki/core/context" {
    export interface IConfigContext extends ILoggerConfig {}
}


@defaultConfig
export class LoggerConfig extends Config<ILoggerConfig> {
    data: ILoggerConfig = {
        logger: {
            logLevel: LogLevel.Debug,
            logName: "Kadeki Bot"
        }
    }
}
