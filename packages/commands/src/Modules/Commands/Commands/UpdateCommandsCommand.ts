import {command, Command, ICommandData} from "../../../Bases/Command";
import {ApplicationCommandOptionType} from "discord.js";
import {UpdateCommandsService} from "../Services/UpdateCommandsService";
import {injectService} from "@kadeki/core";
import {translate} from "@kadeki/localization";

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
        await interaction.reply(translate("commands.updateMessage"));
        await this.updateCommandsService.updateCommands();
    }
}
