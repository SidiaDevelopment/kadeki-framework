"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoidLogger = exports.Logger = exports.LogLevel = void 0;
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["Development"] = 0] = "Development";
    LogLevel[LogLevel["Debug"] = 1] = "Debug";
    LogLevel[LogLevel["Warning"] = 2] = "Warning";
    LogLevel[LogLevel["Error"] = 3] = "Error";
    LogLevel[LogLevel["None"] = 4] = "None";
    LogLevel[LogLevel["AlwaysLog"] = 5] = "AlwaysLog";
})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));
class Logger {
    constructor(logLevel = LogLevel.Debug) {
        this.logLevel = logLevel;
    }
    dev(...messages) {
        this.log(LogLevel.Development, ...messages);
    }
    debug(...messages) {
        this.log(LogLevel.Debug, ...messages);
    }
    warn(...messages) {
        this.log(LogLevel.Warning, ...messages);
    }
    error(...messages) {
        this.log(LogLevel.Error, ...messages);
        throw new Error(...messages);
    }
    alwaysLog(...messages) {
        this.log(LogLevel.AlwaysLog, ...messages);
    }
}
exports.Logger = Logger;
class VoidLogger extends Logger {
    log(logLevel, ...messages) {
    }
}
exports.VoidLogger = VoidLogger;
//# sourceMappingURL=Logger.js.map