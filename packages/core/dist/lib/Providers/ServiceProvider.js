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
exports.ServiceProvider = void 0;
const Provider_1 = require("../Bases/Provider/Provider");
const Module_1 = require("../Bases/Module");
const addContextData_1 = require("../Hooks/addContextData");
const ProviderContext_1 = require("../Contexts/ProviderContext");
const useContext_1 = require("../Hooks/useContext");
const Core_1 = require("../Core");
class ServiceProvider extends Provider_1.Provider {
    getIdentifier(providable) {
        if (providable.config == null)
            throw new Error(`Trying to load unconfigured service: ${super.getIdentifier(providable)}, try adding the @service decorator`);
        return providable.config.tag;
    }
}
exports.ServiceProvider = ServiceProvider;
(0, addContextData_1.addContextData)(ProviderContext_1.ProviderContext, {
    serviceProvider: new ServiceProvider()
});
Module_1.Module.onInit.addListener(({ module }) => {
    const { serviceProvider } = (0, useContext_1.useContext)(ProviderContext_1.ProviderContext);
    if (!module.data.services)
        return;
    serviceProvider.load(module.data.services);
});
Core_1.Core.events.afterStart.addListener(() => __awaiter(void 0, void 0, void 0, function* () {
    const { serviceProvider } = (0, useContext_1.useContext)(ProviderContext_1.ProviderContext);
    yield serviceProvider.init();
}));
//# sourceMappingURL=ServiceProvider.js.map