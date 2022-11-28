import {
    Core,
    getService,
    injectService, LoggingContext,
    ProvideableDictionary,
    ProviderContext,
    service,
    Service,
    useContext
} from "@kadeki/core";
import {REST, Routes, SlashCommandBuilder} from "discord.js";
import {ConfigContext} from "@kadeki/config";
import {DiscordService} from "@kadeki/discord";

@service({
    tag: "updateCommands"
})
export class UpdateCommandsService extends Service {
    @injectService
    private discordService!: DiscordService;

    public async updateCommands(): Promise<void> {
        const {commandProvider} = useContext(ProviderContext);
        const commands = commandProvider.all();

        const builtCommands = [];
        for (let command of Object.values(commands)) {
            const builder = new SlashCommandBuilder()
                .setName(command.config.tag)
                .setDescription("description");
            builtCommands.push(builder.toJSON());
        }

        await this.sendUpdate(builtCommands);
    }

    private async sendUpdate(builtCommands: any[]): Promise<void> {
        const {discord: {key}} = useContext(ConfigContext);
        if (!key) return;
        const client = this.discordService.getClient();
        if (!client) return;
        const app = client.application;
        if (!app) return;

        const {logger} = useContext(LoggingContext);
        try {
            logger.debug("Started refreshing application commands.");

            const rest = new REST({version: "10"}).setToken(key);
            await rest.put(
                Routes.applicationCommands(app.id),
                {body: builtCommands},
            );

            logger.debug("Successfully reloaded application commands.");
        } catch (error) {
            logger.warn(error);
        }
    }
}

Core.events.afterStart.addListener(async () => {
    const {commands: {updateOnStart}} = useContext(ConfigContext);
    if (!updateOnStart) return;

    const updateService = getService(UpdateCommandsService);
    await updateService.updateCommands();
})
