"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultConfig = exports.Config = void 0;
const addContextData_1 = require("../../Hooks/addContextData");
const ConfigContext_1 = require("../../Contexts/ConfigContext");
class Config {
}
exports.Config = Config;
const defaultConfig = (constructor) => {
    const instance = new constructor();
    (0, addContextData_1.addContextData)(ConfigContext_1.ConfigContext, instance.data);
};
exports.defaultConfig = defaultConfig;
//# sourceMappingURL=Config.js.map