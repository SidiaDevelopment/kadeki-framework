"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useContext = void 0;
const Context_1 = require("../Bases/Context");
const useContext = (contextCtr) => Context_1.ContextStorage.get(contextCtr);
exports.useContext = useContext;
//# sourceMappingURL=useContext.js.map