"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerConfig = void 0;
const config_1 = require("@kadeki/config");
const core_1 = require("@kadeki/core");
let LoggerConfig = class LoggerConfig extends config_1.Config {
    constructor() {
        super(...arguments);
        this.data = {
            logger: {
                logLevel: core_1.LogLevel.Debug,
                logName: "Kadeki Bot"
            }
        };
    }
};
LoggerConfig = __decorate([
    config_1.defaultConfig
], LoggerConfig);
exports.LoggerConfig = LoggerConfig;
//# sourceMappingURL=LoggerConfig.js.map