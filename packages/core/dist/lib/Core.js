"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Core = void 0;
const Context_1 = require("./Bases/Context");
const useContext_1 = require("./Hooks/useContext");
const ProviderContext_1 = require("./Contexts/ProviderContext");
const EventListener_1 = require("./Bases/EventListener");
const Logger_1 = require("./Bases/Logging/Logger");
const addContextData_1 = require("./Hooks/addContextData");
const LoggingContext_1 = require("./Contexts/LoggingContext");
class Core {
    static create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const { modules, logger } = data;
            const core = new Core();
            core.init();
            core.loadLogger(logger);
            yield core.loadModules(modules);
            yield Core.events.onCreate.emit(data);
            return core;
        });
    }
    init() {
        Context_1.ContextStorage.loadValues();
    }
    loadModules(modules) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Core.events.beforeInit.emit();
            const { moduleProvider } = (0, useContext_1.useContext)(ProviderContext_1.ProviderContext);
            moduleProvider.load(modules);
            yield moduleProvider.init();
            yield Core.events.afterInit.emit();
        });
    }
    loadLogger(logOptions) {
        if (!logOptions) {
            const logger = new Logger_1.VoidLogger();
            (0, addContextData_1.addContextData)(LoggingContext_1.LoggingContext, { logger });
            return;
        }
        const logger = new logOptions.logStrategy(logOptions.logLevel);
        (0, addContextData_1.addContextData)(LoggingContext_1.LoggingContext, { logger });
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            yield Core.events.beforeStart.emit();
            const { logger } = (0, useContext_1.useContext)(LoggingContext_1.LoggingContext);
            logger.debug("Started Core");
            yield Core.events.afterStart.emit();
        });
    }
}
exports.Core = Core;
Core.events = {
    beforeInit: new EventListener_1.EventListener(),
    afterInit: new EventListener_1.EventListener(),
    beforeStart: new EventListener_1.EventListener(),
    afterStart: new EventListener_1.EventListener(),
    onCreate: new EventListener_1.EventListener()
};
//# sourceMappingURL=Core.js.map