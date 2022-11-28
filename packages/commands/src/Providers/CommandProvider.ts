import {
    addContextData,
    Core, Ctor,
    Module,
    Provider,
    ProviderContext,
    useContext
} from "@kadeki/core";
import {Command} from "../Bases/Command";

export class CommandProvider extends Provider<Command> {
    protected getIdentifier(providable: Ctor<Command>): string {
        if (providable.prototype.config == null)
            throw new Error(`Trying to load unconfigured command: ${super.getIdentifier(providable)}, try adding the @command decorator`);

        if (providable.prototype.config.group) {
            return `${providable.prototype.config.group}_${providable.prototype.config.tag}`;
        }
        return `${providable.prototype.config.tag}`;
    }
}

declare module "@kadeki/core/context" {
    export interface IProviderContext {
        commandProvider: CommandProvider;
    }
}

addContextData(ProviderContext, {
    commandProvider: new CommandProvider()
});

Module.onInit.addListener(async ({module}) => {
    const {commandProvider} = useContext(ProviderContext);
    if (!module.data.commands)
        return;

    commandProvider.load(module.data.commands);
});

Core.events.beforeStart.addListener(async () => {
    const {commandProvider} = useContext(ProviderContext);
    await commandProvider.init();
});
