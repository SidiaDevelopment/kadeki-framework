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
import {
    ApplicationCommandOptionType,
    REST,
    Routes,
    SlashCommandBuilder,
    SlashCommandSubcommandBuilder
} from "discord.js";
import {ConfigContext} from "@kadeki/config";
import {DiscordService} from "@kadeki/discord";
import {Command, ICommandData, ICommandParameter} from "../../../Bases/Command";

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
        const commandGroups: Record<string, Command[]> = {};

        for (let command of Object.values(commands)) {
            if (command.config.group) {
                if (!Object.prototype.hasOwnProperty.call(commandGroups, command.config.group))
                    commandGroups[command.config.group] = [];

                commandGroups[command.config.group].push(command);
                continue;
            }

            const commandBuilder = new SlashCommandBuilder();
            await this.buildSlashCommand(command, commandBuilder);
            builtCommands.push(commandBuilder.toJSON());
        }

        for (let groupName in commandGroups) {
            const commandBuilder = new SlashCommandBuilder()
                .setName(groupName)
                .setDescription("description");

            const commands = commandGroups[groupName];
            for (let command of commands) {
                const subcommandBuilder = new SlashCommandSubcommandBuilder();
                await this.buildSlashCommand(command, subcommandBuilder);
                commandBuilder.addSubcommand(subcommandBuilder)
            }

            builtCommands.push(commandBuilder.toJSON());
        }

        await this.sendUpdate(builtCommands);
    }

    private async buildSlashCommand<T extends SlashCommandBuilder | SlashCommandSubcommandBuilder>(command: Command, builder: T): Promise<void> {
        builder
            .setName(command.config.tag)
            .setDescription("description");

        const params = command.config.parameters as ICommandParameter<ICommandData>[];
        if (!params) return;

        for (const parameter of params) {
            switch (parameter.type) {
            case ApplicationCommandOptionType.String:
                builder.addStringOption(await this.addOption(parameter));
                break;
            case ApplicationCommandOptionType.Integer:
                builder.addIntegerOption(await this.addOption(parameter));
                break;
            case ApplicationCommandOptionType.Boolean:
                builder.addBooleanOption(await this.addOption(parameter));
                break;
            case ApplicationCommandOptionType.User:
                builder.addUserOption(await this.addOption(parameter));
                break;
            case ApplicationCommandOptionType.Channel:
                builder.addChannelOption(await this.addOption(parameter));
                break;
            case ApplicationCommandOptionType.Role:
                builder.addRoleOption(await this.addOption(parameter));
                break;
            case ApplicationCommandOptionType.Mentionable:
                builder.addMentionableOption(await this.addOption(parameter));
                break;
            case ApplicationCommandOptionType.Number:
                builder.addNumberOption(await this.addOption(parameter));
                break;
            }
        }
    }

    private async addOption(parameter: ICommandParameter<ICommandData>): Promise<(option: any) => any> {
        const choices: { name: string, value: string }[] = [];
        if (parameter.choices) {
            choices.push(...parameter.choices);
        } else if (parameter.choicesCallback) {
            choices.push(...(await parameter.choicesCallback()));
        }

        return (option: any) => {
            option.setName(parameter.name);
            option.setDescription(parameter.name);
            option.setRequired(!!parameter.required);
            if (parameter.autocomplete) {
                option.setAutocomplete(!!parameter.autocomplete);
            }
            if (choices.length > 0)
                option.setChoices(...choices);

            return option;
        };
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
