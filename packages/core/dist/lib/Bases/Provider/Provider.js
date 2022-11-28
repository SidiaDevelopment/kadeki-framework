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
exports.Provider = void 0;
const useContext_1 = require("../../Hooks/useContext");
const LoggingContext_1 = require("../../Contexts/LoggingContext");
class Provider {
    constructor() {
        this.providables = {};
    }
    load(providables) {
        let constructors = Array.isArray(providables) ? providables : [providables];
        for (let ctr of constructors) {
            const providable = new ctr();
            const identifier = this.getIdentifier(ctr);
            this.providables[identifier] = providable;
        }
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            const providables = Object.values(this.providables).sort(this.initOrderBy);
            for (let providable of providables) {
                yield providable.init();
            }
        });
    }
    get(providable) {
        const name = typeof providable == "string" ? providable : this.getIdentifier(providable);
        if (!Object.prototype.hasOwnProperty.call(this.providables, name)) {
            const { logger } = (0, useContext_1.useContext)(LoggingContext_1.LoggingContext);
            logger.error(`Tried getting unloaded providable: ${name}`);
        }
        return this.providables[name];
    }
    getByPredicate(predicate) {
        return Object.values(this.providables).find(predicate);
    }
    all() {
        return this.providables;
    }
    getIdentifier(providable) {
        return providable.name;
    }
    initOrderBy(a, b) {
        return a.config.priority - b.config.priority;
    }
}
exports.Provider = Provider;
//# sourceMappingURL=Provider.js.map