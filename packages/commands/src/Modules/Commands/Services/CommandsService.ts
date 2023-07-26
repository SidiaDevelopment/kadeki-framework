import {injectService, ProviderContext, service, Service, useContext} from "@kadeki/core";
import {DiscordApiService} from "@kadeki/discord";
import {Interaction} from "discord.js";

@service({
    tag: "commands"
})
export class CommandsService extends Service {
    @injectService
    discordApiService!: DiscordApiService;

    async init(): Promise<void> {
        this.discordApiService.subscribe("interactionCreate", this.onInteraction);
    }

    private onInteraction = async (interaction: Interaction): Promise<void> => {
        if (!interaction.isChatInputCommand())
            return;

        if (interaction.user.bot)
            return;

        let group = "";
        let commandName = interaction.commandName;
        const subCommandName = interaction.options.getSubcommand(false);

        if (subCommandName) {
            group = commandName;
            commandName = subCommandName
        }

        const {commandProvider} = useContext(ProviderContext);
        const command = commandProvider.getByPredicate(e => commandName == e.config.tag && (!subCommandName || group == e.config.group));
        if (!command)
            return;

        await command.execute(interaction);
    }
}
