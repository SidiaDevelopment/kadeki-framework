import { Module } from "./Bases/Module";
import { Ctors } from "./Utils/Ctor";
import { EventListener } from "./Bases/EventListener";
import { IConfigContext } from "@kadeki/core/context";
export interface ICoreOptions {
    modules: Ctors<Module>;
    config?: Partial<IConfigContext>;
}
declare type CoreEvents = {
    beforeInit: EventListener<void>;
    afterInit: EventListener<void>;
    beforeStart: EventListener<void>;
    afterStart: EventListener<void>;
};
export declare class Core {
    static events: CoreEvents;
    static create({ modules, config }: ICoreOptions): Core;
    protected init(): void;
    protected loadModules(modules: Ctors<Module>): void;
    protected setConfig(config: Partial<IConfigContext>): void;
    start(): void;
}
export {};
