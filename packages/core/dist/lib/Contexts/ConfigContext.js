"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigContext = void 0;
const Context_1 = require("../Bases/Context");
const createContext_1 = require("../Hooks/createContext");
const deepmerge_1 = __importDefault(require("deepmerge"));
class ConfigContext extends Context_1.Context {
    addData(data) {
        if (!this.data)
            this.data = {};
        console.log(this.data, data);
        this.data = (0, deepmerge_1.default)(this.data, data);
    }
}
exports.ConfigContext = ConfigContext;
(0, createContext_1.createContext)(new ConfigContext());
//# sourceMappingURL=ConfigContext.js.map