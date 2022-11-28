import {command, Command, ICommandData} from "../../../Bases/Command";
import {ApplicationCommandOptionType, ChatInputCommandInteraction} from "discord.js";
import {UpdateCommandsService} from "../Services/UpdateCommandsService";
import {injectService} from "@kadeki/core";

export interface IUpdateCommandsCommandData extends ICommandData {
    text: string;
}
@command<IUpdateCommandsCommandData>({
    tag: "update",
    group: "commands",
    parameters: [{
        name: "text",
        description: "Test",
        type: ApplicationCommandOptionType.String
    }]
})
export class UpdateCommandsCommand extends Command<IUpdateCommandsCommandData> {
    @injectService
    private updateCommandsService!: UpdateCommandsService;

    public async handle(data: IUpdateCommandsCommandData): Promise<void> {
        const {interaction} = data;
        await interaction.reply("Updating commands")
        await this.updateCommandsService.updateCommands();
    }
}
