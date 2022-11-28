import {ApplicationCommandOptionType, ChatInputCommandInteraction} from "discord.js";
import {ICommandData, ICommandParameter} from "../Bases/Command";

export type ParameterData<T> = Omit<T, keyof ICommandData>;

export class CommandParameterHelper {
    public static collectParameters<T extends ICommandData>(parameters: ICommandParameter<T>[], interaction: ChatInputCommandInteraction): ParameterData<T> {
        const data: Partial<ParameterData<T>> = {};
        for (let parameter of parameters) {
            CommandParameterHelper.collectParameter(data, interaction, parameter.name as string, parameter.type);
        }
        return data as ParameterData<T>;
    }

    public static collectParameter<T>(data: any, interaction: ChatInputCommandInteraction, name: string, parameterType: ApplicationCommandOptionType): void {
        switch (parameterType) {
            case ApplicationCommandOptionType.String:
                data[name] = interaction.options.getString(name);
                break;
            case ApplicationCommandOptionType.Integer:
                data[name] = interaction.options.getInteger(name);
                break;
            case ApplicationCommandOptionType.Boolean:
                data[name] = interaction.options.getBoolean(name);
                break;
            case ApplicationCommandOptionType.User:
                data[name] = interaction.options.getUser(name);
                break;
            case ApplicationCommandOptionType.Channel:
                data[name] = interaction.options.getChannel(name);
                break;
            case ApplicationCommandOptionType.Role:
                data[name] = interaction.options.getRole(name);
                break;
            case ApplicationCommandOptionType.Mentionable:
                data[name] = interaction.options.getMentionable(name);
                break;
            case ApplicationCommandOptionType.Number:
                data[name] = interaction.options.getNumber(name);
                break;
            case ApplicationCommandOptionType.Subcommand:
                data[name] = interaction.options.getSubcommand();
                break;
            case ApplicationCommandOptionType.SubcommandGroup:
                data[name] = interaction.options.getSubcommandGroup();
                break;
        }
    }
}
