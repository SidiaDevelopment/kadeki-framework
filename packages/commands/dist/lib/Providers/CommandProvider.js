"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandProvider = void 0;
const core_1 = require("@kadeki/core");
class CommandProvider extends core_1.Provider {
    getIdentifier(providable) {
        if (providable.prototype.config == null)
            throw new Error(`Trying to load unconfigured command: ${super.getIdentifier(providable)}, try adding the @command decorator`);
        if (providable.prototype.config.group) {
            return `${providable.prototype.config.group}_${providable.prototype.config.tag}`;
        }
        return `${providable.prototype.config.tag}`;
    }
}
exports.CommandProvider = CommandProvider;
(0, core_1.addContextData)(core_1.ProviderContext, {
    commandProvider: new CommandProvider()
});
core_1.Module.onInit.addListener(({ module }) => __awaiter(void 0, void 0, void 0, function* () {
    const { commandProvider } = (0, core_1.useContext)(core_1.ProviderContext);
    if (!module.data.commands)
        return;
    commandProvider.load(module.data.commands);
}));
core_1.Core.events.beforeStart.addListener(() => __awaiter(void 0, void 0, void 0, function* () {
    const { commandProvider } = (0, core_1.useContext)(core_1.ProviderContext);
    yield commandProvider.init();
}));
//# sourceMappingURL=CommandProvider.js.map