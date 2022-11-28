import { Service } from "@kadeki/core";
export declare class UpdateCommandsService extends Service {
    private discordService;
    updateCommands(): Promise<void>;
    private sendUpdate;
}
