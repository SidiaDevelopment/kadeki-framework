import {Module} from "./Bases/Module";
import {Ctors} from "./Utils/Ctor";
import {ContextStorage} from "./Bases/Context";
import {useContext} from "./Hooks/useContext";
import {ProviderContext} from "./Contexts/ProviderContext";
import {EventListener} from "./Bases/EventListener";
import {IConfigContext} from "@kadeki/core/context";
import {addContextData} from "./Hooks/addContextData";
import {ConfigContext} from "./Contexts/ConfigContext";
import {Config} from "./Bases/Config/Config";

export interface ICoreOptions {
    modules: Ctors<Module>;
    config?: Partial<IConfigContext>;
}

type CoreEvents = {
    beforeInit: EventListener<void>;
    afterInit: EventListener<void>;
    beforeStart: EventListener<void>;
    afterStart: EventListener<void>;
}

export class Core {
    public static events: CoreEvents = {
        beforeInit: new EventListener<void>(),
        afterInit: new EventListener<void>(),
        beforeStart: new EventListener<void>(),
        afterStart: new EventListener<void>()
    }

    public static create({
        modules,
        config = {}
    }: ICoreOptions): Core {
        const core = new Core();
        core.init();
        core.loadModules(modules);
        core.setConfig(config);

        return core;
    }

    protected init(): void {
        ContextStorage.loadValues();
    }

    protected loadModules(modules: Ctors<Module>): void {
        Core.events.beforeInit.emit();

        const {moduleProvider} = useContext(ProviderContext);
        moduleProvider.load(modules);
        moduleProvider.init();

        Core.events.afterInit.emit();
    }

    protected setConfig(config: Partial<IConfigContext>): void {
        addContextData(ConfigContext, config);
    }

    public start(): void {
        Core.events.beforeStart.emit();

        Core.events.afterStart.emit();
    }
}
