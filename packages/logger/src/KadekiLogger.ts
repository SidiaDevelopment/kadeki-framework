import chalk from "chalk";
import moment from "moment";

import {Logger, LogLevel, useContext} from "@kadeki/core";
import {ConfigContext} from "@kadeki/config";

export class KadekiLogger extends Logger {
    constructor() {
        super();

        const {logger: {logLevel}} = useContext(ConfigContext);
        this.logLevel = logLevel;
    }

    public log(logLevel: LogLevel, ...messages: any[]): void {
        if (logLevel < this.logLevel) {
            return;
        }

        const {logger: {logName}} = useContext(ConfigContext);
        const date = moment().format("HH:mm:ss");
        const logLevelText = chalk.red(LogLevel[logLevel]);
        const dateText = chalk.cyanBright(date);
        const nameText = chalk.green(logName);

        console.log(`${dateText} - ${nameText} [${logLevelText}]:`, ...messages);
    }
}
