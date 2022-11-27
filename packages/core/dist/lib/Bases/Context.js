"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContextStorage = exports.Context = void 0;
class Context {
    getData() {
        return this.data;
    }
    addData(data) {
        if (!this.data)
            this.data = {};
        this.data = Object.assign(Object.assign({}, this.data), data);
    }
    create() {
        ContextStorage.register(this);
    }
}
exports.Context = Context;
class ContextStorage {
    static register(context) {
        const name = context.constructor.name;
        ContextStorage.storage[name] = context;
    }
    static get(contextCtr) {
        const name = contextCtr.name;
        if (!ContextStorage.storage.hasOwnProperty(name))
            throw Error(`Tried to get non-registered context ${name}`);
        return ContextStorage.storage[name].getData();
    }
    static loadValues() {
        for (let hooksKey in ContextStorage.hooks) {
            if (!Object.prototype.hasOwnProperty.call(ContextStorage.storage, hooksKey)) {
                continue;
            }
            const hooks = ContextStorage.hooks[hooksKey];
            for (let hook of hooks) {
                ContextStorage.storage[hooksKey].addData(hook);
            }
        }
        ContextStorage.isInitialized = true;
    }
    static registerValues(contextCtr, data) {
        const name = contextCtr.name;
        if (ContextStorage.isInitialized) {
            if (!Object.prototype.hasOwnProperty.call(ContextStorage.storage, name))
                return;
            ContextStorage.storage[name].addData(data);
            return;
        }
        if (!Object.prototype.hasOwnProperty.call(ContextStorage.hooks, name)) {
            ContextStorage.hooks[name] = [data];
            return;
        }
        ContextStorage.hooks[name].push(data);
    }
}
exports.ContextStorage = ContextStorage;
ContextStorage.storage = {};
ContextStorage.hooks = {};
ContextStorage.isInitialized = false;
//# sourceMappingURL=Context.js.map