"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addContextData = void 0;
const Context_1 = require("../Bases/Context");
const addContextData = (contextCtr, data) => Context_1.ContextStorage.registerValues(contextCtr, data);
exports.addContextData = addContextData;
//# sourceMappingURL=addContextData.js.map