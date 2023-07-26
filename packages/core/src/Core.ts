import {ICoreStartupOptions} from "@kadeki/core/app";
import {Module} from "./Bases/Module";
import {Ctor, Ctors} from "./Utils/Ctor";
import {ContextStorage} from "./Bases/Context";
import {useContext} from "./Hooks/useContext";
import {ProviderContext} from "./Contexts/ProviderContext";
import {EventListener} from "./Bases/EventListener";
import {Logger, LogLevel, VoidLogger} from "./Bases/Logging/Logger";
import {addContextData} from "./Hooks/addContextData";
import {LoggingContext} from "./Contexts/LoggingContext";

type LogOptions = {
    logStrategy: Ctor<Logger>;
    logLevel: LogLevel
};

export interface ICoreOptions {
    modules: Ctors<Module>;
    logger?: LogOptions;
}

declare module "@kadeki/core/app" {
    export interface ICoreStartupOptions extends ICoreOptions{}
}

type CoreEvents = {
    beforeInit: EventListener<void>;
    afterInit: EventListener<void>;
    beforeStart: EventListener<void>;
    afterStart: EventListener<void>;
    onCreate: EventListener<ICoreStartupOptions>;
}

export class Core {
    public static events: CoreEvents = {
        beforeInit: new EventListener<void>(),
        afterInit: new EventListener<void>(),
        beforeStart: new EventListener<void>(),
        afterStart: new EventListener<void>(),
        onCreate: new EventListener<ICoreStartupOptions>()
    }

    public static async create(data: ICoreStartupOptions): Promise<Core> {
        const {modules, logger} = data;

        const core = new Core();
        core.init();
        core.loadLogger(logger);

        await core.loadModules(modules);
        await Core.events.onCreate.emit(data);

        return core;
    }

    protected init(): void {
        ContextStorage.loadValues();
    }

    protected async loadModules(modules: Ctors<Module>): Promise<void> {
        await Core.events.beforeInit.emit();

        const {moduleProvider} = useContext(ProviderContext);
        moduleProvider.load(modules);
        await moduleProvider.init();

        await Core.events.afterInit.emit();
    }

    protected loadLogger(logOptions?: LogOptions) {
        if (!logOptions) {
            const logger = new VoidLogger();
            addContextData(LoggingContext, {logger})
            return;
        }

        const logger = new logOptions.logStrategy(logOptions.logLevel);
        addContextData(LoggingContext, {logger})
    }

    public async start(): Promise<void> {
        await Core.events.beforeStart.emit();
        const {logger} = useContext(LoggingContext);
        logger.debug("Started Core");
        await Core.events.afterStart.emit();
    }
}
