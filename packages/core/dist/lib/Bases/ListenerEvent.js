"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListenerEvent = void 0;
class ListenerEvent {
    constructor() {
        this.listeners = [];
    }
    emit(data) {
        for (let listener of this.listeners) {
            listener(data);
        }
    }
    addListener(listener) {
        this.listeners.push(listener);
    }
    removeListener(listener) {
        this.listeners = this.listeners.filter(e => e != listener);
    }
}
exports.ListenerEvent = ListenerEvent;
//# sourceMappingURL=ListenerEvent.js.map