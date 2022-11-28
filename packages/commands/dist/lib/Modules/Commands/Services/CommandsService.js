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
exports.CommandsService = void 0;
const core_1 = require("@kadeki/core");
const discord_1 = require("@kadeki/discord");
let CommandsService = class CommandsService extends core_1.Service {
    constructor() {
        super(...arguments);
        this.onInteraction = (interaction) => {
            if (!interaction.isChatInputCommand())
                return;
            if (interaction.user.bot)
                return;
            const { commandProvider } = (0, core_1.useContext)(core_1.ProviderContext);
            const command = commandProvider.get(interaction.commandName);
            if (!command)
                return;
            command.handle(interaction);
        };
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            this.discordApiService.subscribe("interactionCreate", this.onInteraction);
        });
    }
};
__decorate([
    core_1.injectService,
    __metadata("design:type", discord_1.DiscordApiService)
], CommandsService.prototype, "discordApiService", void 0);
CommandsService = __decorate([
    (0, core_1.service)({
        tag: "commands"
    })
], CommandsService);
exports.CommandsService = CommandsService;
//# sourceMappingURL=CommandsService.js.map