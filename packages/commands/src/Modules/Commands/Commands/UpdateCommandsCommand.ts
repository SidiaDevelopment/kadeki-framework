import {command, Command} from "../../../Bases/Command";
import {Interaction} from "discord.js";
import {UpdateCommandsService} from "../Services/UpdateCommandsService";
import {injectService} from "@kadeki/core";

@command({
    tag: "update"
})
export class UpdateCommandsCommand extends Command {
    @injectService
    private updateCommandsService!: UpdateCommandsService;

    public async handle(interaction: Interaction): Promise<void> {
        if (interaction.isRepliable())
            await interaction.reply("Updating commands")

        await this.updateCommandsService.updateCommands();
    }
}
