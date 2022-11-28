"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscordApiService = void 0;
const core_1 = require("@kadeki/core");
const DiscordService_1 = require("./DiscordService");
let DiscordApiService = class DiscordApiService extends core_1.Service {
    constructor() {
        super(...arguments);
        this.subscribers = {};
    }
    subscribe(name, callback) {
        if (!Object.prototype.hasOwnProperty.call(this.subscribers, name)) {
            this.subscribers[name] = [];
            const client = this.discordService.getClient();
            if (client)
                client.on(name, this.mapEvent(name));
        }
        this.subscribers[name].push(callback);
    }
    mapEvent(name) {
        return (...args) => {
            this.subscribers[name].forEach(e => e(...args));
        };
    }
};
__decorate([
    core_1.injectService,
    __metadata("design:type", DiscordService_1.DiscordService)
], DiscordApiService.prototype, "discordService", void 0);
DiscordApiService = __decorate([
    (0, core_1.service)({
        tag: "discordApi",
    })
], DiscordApiService);
exports.DiscordApiService = DiscordApiService;
//# sourceMappingURL=DiscordApiService.js.map