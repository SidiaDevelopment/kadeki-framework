"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscordModule = void 0;
const core_1 = require("@kadeki/core");
const DiscordConfig_1 = require("./Config/DiscordConfig");
const DiscordService_1 = require("./Service/DiscordService");
const DiscordApiService_1 = require("./Service/DiscordApiService");
let DiscordModule = class DiscordModule extends core_1.Module {
    constructor() {
        super(...arguments);
        this.data = {
            services: [
                DiscordService_1.DiscordService,
                DiscordApiService_1.DiscordApiService
            ],
            config: DiscordConfig_1.DiscordConfig
        };
    }
};
DiscordModule = __decorate([
    (0, core_1.module)({
        tag: "discord"
    })
], DiscordModule);
exports.DiscordModule = DiscordModule;
//# sourceMappingURL=DiscordModule.js.map