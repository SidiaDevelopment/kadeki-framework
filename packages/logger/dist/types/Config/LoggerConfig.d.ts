import { Config } from "@kadeki/config";
import { LogLevel } from "@kadeki/core";
interface ILoggerConfig {
    logger: {
        logLevel: LogLevel;
        logName: string;
    };
}
declare module "@kadeki/core/context" {
    interface IConfigContext extends ILoggerConfig {
    }
}
export declare class LoggerConfig extends Config<ILoggerConfig> {
    data: ILoggerConfig;
}
export {};
