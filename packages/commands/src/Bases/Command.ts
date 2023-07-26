import {Ctors, InitPriority, IProvidableConfig, Providable, providableDecorator} from "@kadeki/core";
import {
    APIApplicationCommandOptionChoice,
    ApplicationCommandOptionType, AutocompleteInteraction,
    ChatInputCommandInteraction,
    Guild,
    TextBasedChannel,
    User
} from "discord.js";
import {CommandParameterHelper} from "../Utils/CommandParameterHelper";
import {Localization} from "@kadeki/localization";

export interface ICommandData {
    user: User;
    interaction: ChatInputCommandInteraction;
    channel?: TextBasedChannel;
    guild?: Guild;
}

export interface ICommandParameter<TData extends ICommandData> {
    name: keyof Omit<TData, keyof ICommandData>;
    type: Exclude<ApplicationCommandOptionType, ApplicationCommandOptionType.Subcommand | ApplicationCommandOptionType.SubcommandGroup>;
    description: Localization;
    autocomplete?: (interaction: AutocompleteInteraction) => Promise<void>;
    required?: true;
    catchall?: true;
    choices?: APIApplicationCommandOptionChoice<string>[];
    choicesCallback?: () => Promise<APIApplicationCommandOptionChoice<string>[]>;
}

export interface IDiscordCommandConfig<T extends ICommandData> extends IProvidableConfig {
    tag: string;
    group?: string;
    description: Localization,
    parameters?: ICommandParameter<T>[]
}

export abstract class Command<T extends ICommandData = ICommandData> extends Providable<IDiscordCommandConfig<T>> {
    public async init(): Promise<void> {};
    public abstract handle(data: T): Promise<void>;

    public async execute(interaction: ChatInputCommandInteraction) {
        const data = this.collectData(interaction);
        await this.handle(data);
    }

    private collectData(interaction: ChatInputCommandInteraction): T {
        const standardData = this.collectStandardData(interaction);

        const params = this.config.parameters as ICommandParameter<ICommandData>[];
        const parameterData = CommandParameterHelper.collectParameters(params ?? [], interaction);

        return {...standardData, ...parameterData} as T;
    }

    private collectStandardData(interaction: ChatInputCommandInteraction): ICommandData {
        const data: ICommandData = {
            user: interaction.user,
            interaction: interaction
        }

        if (interaction.guild) {
            data["guild"] = interaction.guild;
        }

        if (interaction.channel) {
            data["channel"] = interaction.channel;
        }

        return data;
    }
}

export const command = <T extends ICommandData = ICommandData>(config: IDiscordCommandConfig<T>) => {
    return providableDecorator<IDiscordCommandConfig<T>>({
        priority: InitPriority.Normal,
        tag: "",
        group: "",
        description: "commands.commands.update.description",
        parameters: [],
    })(config);
}

declare module "@kadeki/core/module" {
    interface IModuleData {
        commands?: Ctors<Command<any>>;
    }
}
