"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Core = void 0;
const Context_1 = require("./Bases/Context");
const useContext_1 = require("./Hooks/useContext");
const ProviderContext_1 = require("./Contexts/ProviderContext");
const EventListener_1 = require("./Bases/EventListener");
const addContextData_1 = require("./Hooks/addContextData");
const ConfigContext_1 = require("./Contexts/ConfigContext");
class Core {
    static create({ modules, config = {} }) {
        const core = new Core();
        core.init();
        core.loadModules(modules);
        core.setConfig(config);
        return core;
    }
    init() {
        Context_1.ContextStorage.loadValues();
    }
    loadModules(modules) {
        Core.events.beforeInit.emit();
        const { moduleProvider } = (0, useContext_1.useContext)(ProviderContext_1.ProviderContext);
        moduleProvider.load(modules);
        moduleProvider.init();
        Core.events.afterInit.emit();
    }
    setConfig(config) {
        (0, addContextData_1.addContextData)(ConfigContext_1.ConfigContext, config);
    }
    start() {
        Core.events.beforeStart.emit();
        Core.events.afterStart.emit();
    }
}
exports.Core = Core;
Core.events = {
    beforeInit: new EventListener_1.EventListener(),
    afterInit: new EventListener_1.EventListener(),
    beforeStart: new EventListener_1.EventListener(),
    afterStart: new EventListener_1.EventListener()
};
//# sourceMappingURL=Core.js.map