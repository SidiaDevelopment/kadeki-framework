import { Ctor, Provider } from "@kadeki/core";
import { Command } from "../Bases/Command";
export declare class CommandProvider extends Provider<Command> {
    protected getIdentifier(providable: Ctor<Command>): string;
}
declare module "@kadeki/core/context" {
    interface IProviderContext {
        commandProvider: CommandProvider;
    }
}
