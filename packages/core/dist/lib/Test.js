"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Test = void 0;
const useContext_1 = require("./Hooks/useContext");
const ProviderContext_1 = require("./Contexts/ProviderContext");
class Test {
    test() {
        const { moduleProvider } = (0, useContext_1.useContext)(ProviderContext_1.ProviderContext);
        moduleProvider.test();
    }
}
exports.Test = Test;
//# sourceMappingURL=Test.js.map