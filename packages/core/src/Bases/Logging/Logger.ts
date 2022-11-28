export enum LogLevel {
    Development,
    Debug,
    Warning,
    Error,
    None,
    AlwaysLog
}

export abstract class Logger {
    protected logLevel: LogLevel;

    constructor(logLevel: LogLevel = LogLevel.Debug) {
        this.logLevel = logLevel
    }

    public abstract log(logLevel: LogLevel, ...messages: any[]): void;

    public dev(...messages: any[]) {
        this.log(LogLevel.Development, ...messages);
    }

    public debug(...messages: any[]) {
        this.log(LogLevel.Debug, ...messages);
    }

    public warn(...messages: any[]) {
        this.log(LogLevel.Warning, ...messages);
    }

    public error(...messages: any[]): never {
        this.log(LogLevel.Error, ...messages);
        throw new Error(...messages);
    }

    public alwaysLog(...messages: any[]) {
        this.log(LogLevel.AlwaysLog, ...messages);
    }
}

export class VoidLogger extends Logger {
    log(logLevel: LogLevel, ...messages: any[]): void {

    }
}
