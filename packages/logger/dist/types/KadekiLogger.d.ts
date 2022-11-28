import { Logger, LogLevel } from "@kadeki/core";
export declare class KadekiLogger extends Logger {
    constructor();
    log(logLevel: LogLevel, ...messages: any[]): void;
}
