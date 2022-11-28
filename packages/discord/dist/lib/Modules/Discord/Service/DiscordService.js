"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
exports.DiscordService = void 0;
const core_1 = require("@kadeki/core");
const config_1 = require("@kadeki/config");
const discord_js_1 = require("discord.js");
const core_2 = require("@kadeki/core");
let DiscordService = class DiscordService extends core_1.Service {
    constructor() {
        super(...arguments);
        this.client = null;
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            const { discord } = (0, core_1.useContext)(config_1.ConfigContext);
            this.client = new discord_js_1.Client({
                intents: discord.intents
            });
            yield this.client.login(discord.key);
            const { logger } = (0, core_1.useContext)(core_2.LoggingContext);
            logger.debug("Discord bot logged in");
        });
    }
    getClient() {
        return this.client;
    }
};
DiscordService = __decorate([
    (0, core_1.service)({
        tag: "discord",
        priority: core_1.InitPriority.High
    })
], DiscordService);
exports.DiscordService = DiscordService;
//# sourceMappingURL=DiscordService.js.map