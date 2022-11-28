"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandsModule = void 0;
const core_1 = require("@kadeki/core");
const CommandsService_1 = require("./Services/CommandsService");
const UpdateCommandsService_1 = require("./Services/UpdateCommandsService");
const UpdateCommandsCommand_1 = require("./Commands/UpdateCommandsCommand");
let CommandsModule = class CommandsModule extends core_1.Module {
    constructor() {
        super(...arguments);
        this.data = {
            commands: [
                UpdateCommandsCommand_1.UpdateCommandsCommand,
            ],
            services: [
                CommandsService_1.CommandsService,
                UpdateCommandsService_1.UpdateCommandsService,
            ],
        };
    }
};
CommandsModule = __decorate([
    (0, core_1.module)({
        tag: "commands"
    })
], CommandsModule);
exports.CommandsModule = CommandsModule;
//# sourceMappingURL=CommandsModule.js.map