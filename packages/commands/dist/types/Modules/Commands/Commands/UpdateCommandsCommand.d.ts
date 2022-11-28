import { Command } from "../../../Bases/Command";
import { Interaction } from "discord.js";
export declare class UpdateCommandsCommand extends Command {
    private updateCommandsService;
    handle(interaction: Interaction): Promise<void>;
}
