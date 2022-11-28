import {Core, LogLevel} from "@kadeki/core";
import {modules} from "./modules";
import {config} from "./config";
import {KadekiLogger} from "@kadeki/logger";

Core.create({
    modules: modules,
    config: config,
    logger: {
        logStrategy: KadekiLogger,
        logLevel: LogLevel.None
    },
}).then(async (core) => {
    await core.start();
});
