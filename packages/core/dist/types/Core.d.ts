import { ICoreStartupOptions } from "@kadeki/core/app";
import { Module } from "./Bases/Module";
import { Ctor, Ctors } from "./Utils/Ctor";
import { EventListener } from "./Bases/EventListener";
import { Logger, LogLevel } from "./Bases/Logging/Logger";
type LogOptions = {
    logStrategy: Ctor<Logger>;
    logLevel: LogLevel;
};
export interface ICoreOptions {
    modules: Ctors<Module>;
    logger?: LogOptions;
}
declare module "@kadeki/core/app" {
    interface ICoreStartupOptions extends ICoreOptions {
    }
}
type CoreEvents = {
    beforeInit: EventListener<void>;
    afterInit: EventListener<void>;
    beforeStart: EventListener<void>;
    afterStart: EventListener<void>;
    onCreate: EventListener<ICoreStartupOptions>;
};
export declare class Core {
    static events: CoreEvents;
    static create(data: ICoreStartupOptions): Promise<Core>;
    protected init(): void;
    protected loadModules(modules: Ctors<Module>): Promise<void>;
    protected loadLogger(logOptions?: LogOptions): void;
    start(): Promise<void>;
}
export {};
