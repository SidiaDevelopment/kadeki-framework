"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigContext = void 0;
const deepmerge_1 = __importDefault(require("deepmerge"));
const core_1 = require("@kadeki/core");
class ConfigContext extends core_1.Context {
    addData(data) {
        if (!this.data)
            this.data = {};
        this.data = (0, deepmerge_1.default)(this.data, data);
    }
}
exports.ConfigContext = ConfigContext;
(0, core_1.createContext)(new ConfigContext());
//# sourceMappingURL=ConfigContext.js.map