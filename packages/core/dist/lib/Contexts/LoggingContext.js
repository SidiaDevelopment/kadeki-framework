"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggingContext = void 0;
const Context_1 = require("../Bases/Context");
const createContext_1 = require("../Hooks/createContext");
class LoggingContext extends Context_1.Context {
}
exports.LoggingContext = LoggingContext;
(0, createContext_1.createContext)(new LoggingContext());
//# sourceMappingURL=LoggingContext.js.map