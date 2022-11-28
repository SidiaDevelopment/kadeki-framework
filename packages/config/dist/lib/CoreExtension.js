"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@kadeki/core");
const ConfigContext_1 = require("./Contexts/ConfigContext");
core_1.Core.events.onCreate.addListener(({ config }) => {
    (0, core_1.addContextData)(ConfigContext_1.ConfigContext, config);
});
//# sourceMappingURL=CoreExtension.js.map