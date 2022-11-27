"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.providableDecorator = exports.InitPriority = exports.Providable = void 0;
class Providable {
    get isLoaded() {
        return this.config != null;
    }
}
exports.Providable = Providable;
var InitPriority;
(function (InitPriority) {
    InitPriority[InitPriority["High"] = 0] = "High";
    InitPriority[InitPriority["Normal"] = 1] = "Normal";
    InitPriority[InitPriority["Low"] = 2] = "Low";
})(InitPriority = exports.InitPriority || (exports.InitPriority = {}));
const providableDecorator = (defaultConfig) => {
    return (config) => {
        return (constructor) => {
            constructor.prototype.config = Object.assign(Object.assign({}, defaultConfig), config);
        };
    };
};
exports.providableDecorator = providableDecorator;
//# sourceMappingURL=Providable.js.map