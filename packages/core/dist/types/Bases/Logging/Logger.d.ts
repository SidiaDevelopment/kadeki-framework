export declare enum LogLevel {
    Development = 0,
    Debug = 1,
    Warning = 2,
    Error = 3,
    None = 4,
    AlwaysLog = 5
}
export declare abstract class Logger {
    protected logLevel: LogLevel;
    constructor(logLevel?: LogLevel);
    abstract log(logLevel: LogLevel, ...messages: any[]): void;
    dev(...messages: any[]): void;
    debug(...messages: any[]): void;
    warn(...messages: any[]): void;
    error(...messages: any[]): never;
    alwaysLog(...messages: any[]): void;
}
export declare class VoidLogger extends Logger {
    log(logLevel: LogLevel, ...messages: any[]): void;
}
