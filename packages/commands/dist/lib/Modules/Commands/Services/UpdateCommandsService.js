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
exports.UpdateCommandsService = void 0;
const core_1 = require("@kadeki/core");
const discord_js_1 = require("discord.js");
const config_1 = require("@kadeki/config");
const discord_1 = require("@kadeki/discord");
let UpdateCommandsService = class UpdateCommandsService extends core_1.Service {
    updateCommands() {
        return __awaiter(this, void 0, void 0, function* () {
            const { commandProvider } = (0, core_1.useContext)(core_1.ProviderContext);
            const commands = commandProvider.all();
            const builtCommands = [];
            for (let command of Object.values(commands)) {
                const builder = new discord_js_1.SlashCommandBuilder()
                    .setName(command.config.tag)
                    .setDescription("description");
                builtCommands.push(builder.toJSON());
            }
            yield this.sendUpdate(builtCommands);
        });
    }
    sendUpdate(builtCommands) {
        return __awaiter(this, void 0, void 0, function* () {
            const { discord: { key } } = (0, core_1.useContext)(config_1.ConfigContext);
            if (!key)
                return;
            const client = this.discordService.getClient();
            if (!client)
                return;
            const app = client.application;
            if (!app)
                return;
            const { logger } = (0, core_1.useContext)(core_1.LoggingContext);
            try {
                logger.debug("Started refreshing application commands.");
                const rest = new discord_js_1.REST({ version: "10" }).setToken(key);
                yield rest.put(discord_js_1.Routes.applicationCommands(app.id), { body: builtCommands });
                logger.debug("Successfully reloaded application commands.");
            }
            catch (error) {
                logger.warn(error);
            }
        });
    }
};
__decorate([
    core_1.injectService,
    __metadata("design:type", discord_1.DiscordService)
], UpdateCommandsService.prototype, "discordService", void 0);
UpdateCommandsService = __decorate([
    (0, core_1.service)({
        tag: "updateCommands"
    })
], UpdateCommandsService);
exports.UpdateCommandsService = UpdateCommandsService;
core_1.Core.events.afterStart.addListener(() => __awaiter(void 0, void 0, void 0, function* () {
    const { commands: { updateOnStart } } = (0, core_1.useContext)(config_1.ConfigContext);
    if (!updateOnStart)
        return;
    const updateService = (0, core_1.getService)(UpdateCommandsService);
    yield updateService.updateCommands();
}));
//# sourceMappingURL=UpdateCommandsService.js.map