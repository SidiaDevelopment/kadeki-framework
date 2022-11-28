"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.injectService = exports.getService = void 0;
const useContext_1 = require("./useContext");
const ProviderContext_1 = require("../Contexts/ProviderContext");
const getService = (ctor) => {
    const { serviceProvider } = (0, useContext_1.useContext)(ProviderContext_1.ProviderContext);
    return serviceProvider.get(ctor);
};
exports.getService = getService;
const injectService = (target, propertyKey) => {
    const t = Reflect.getMetadata("design:type", target, propertyKey);
    const getter = () => {
        return (0, exports.getService)(t);
    };
    const setter = () => {
        return;
    };
    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter
    });
};
exports.injectService = injectService;
//# sourceMappingURL=getService.js.map