"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KadekiLogger = void 0;
const chalk_1 = __importDefault(require("chalk"));
const moment_1 = __importDefault(require("moment"));
const core_1 = require("@kadeki/core");
const config_1 = require("@kadeki/config");
class KadekiLogger extends core_1.Logger {
    constructor() {
        super();
        const { logger: { logLevel } } = (0, core_1.useContext)(config_1.ConfigContext);
        this.logLevel = logLevel;
    }
    log(logLevel, ...messages) {
        if (logLevel < this.logLevel) {
            return;
        }
        const { logger: { logName } } = (0, core_1.useContext)(config_1.ConfigContext);
        const date = (0, moment_1.default)().format("HH:mm:ss");
        const logLevelText = chalk_1.default.red(core_1.LogLevel[logLevel]);
        const dateText = chalk_1.default.cyanBright(date);
        const nameText = chalk_1.default.green(logName);
        console.log(`${dateText} - ${nameText} [${logLevelText}]:`, ...messages);
    }
}
exports.KadekiLogger = KadekiLogger;
//# sourceMappingURL=KadekiLogger.js.map