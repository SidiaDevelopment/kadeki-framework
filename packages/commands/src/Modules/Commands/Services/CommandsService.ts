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

    private onInteraction = (interaction: Interaction): void => {
        if (!interaction.isChatInputCommand())
            return;

        if (interaction.user.bot)
            return;

        const {commandProvider} = useContext(ProviderContext);
        const command = commandProvider.get(interaction.commandName);
        if (!command)
            return;

        command.handle(interaction);
    }
}
