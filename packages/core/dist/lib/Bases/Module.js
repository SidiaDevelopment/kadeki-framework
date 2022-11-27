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
exports.module = exports.Module = void 0;
const Providable_1 = require("./Provider/Providable");
const EventListener_1 = require("./EventListener");
class Module extends Providable_1.Providable {
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            Module.onInit.emit({ module: this });
        });
    }
}
exports.Module = Module;
Module.onInit = new EventListener_1.EventListener();
exports.module = (0, Providable_1.providableDecorator)({
    priority: Providable_1.InitPriority.Normal,
    tag: ""
});
//# sourceMappingURL=Module.js.map