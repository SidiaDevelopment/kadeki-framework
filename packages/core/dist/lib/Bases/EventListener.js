"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventListener = void 0;
class EventListener {
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
exports.EventListener = EventListener;
//# sourceMappingURL=EventListener.js.map