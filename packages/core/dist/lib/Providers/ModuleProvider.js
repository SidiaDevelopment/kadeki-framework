"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModuleProvider = void 0;
const Provider_1 = require("../Bases/Provider/Provider");
const addContextData_1 = require("../Hooks/addContextData");
const ProviderContext_1 = require("../Contexts/ProviderContext");
class ModuleProvider extends Provider_1.Provider {
    getIdentifier(providable) {
        if (providable.prototype.config == null)
            throw new Error(`Trying to load unconfigured module: ${super.getIdentifier(providable)}, try adding the @module decorator`);
        return super.getIdentifier(providable);
    }
}
exports.ModuleProvider = ModuleProvider;
(0, addContextData_1.addContextData)(ProviderContext_1.ProviderContext, {
    moduleProvider: new ModuleProvider()
});
//# sourceMappingURL=ModuleProvider.js.map