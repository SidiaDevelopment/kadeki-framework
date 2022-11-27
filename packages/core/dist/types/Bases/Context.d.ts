import { Ctor } from "../Utils/Ctor";
export declare abstract class Context<T extends Record<string, any>> {
    data: T;
    getData(): T;
    addData(data: Partial<T>): void;
    create(): void;
}
export declare class ContextStorage {
    protected static storage: Record<string, Context<any>>;
    protected static hooks: Record<string, object[]>;
    protected static isInitialized: boolean;
    static register(context: Context<any>): void;
    static get<T extends Context<any>>(contextCtr: Ctor<T>): T["data"];
    static loadValues(): void;
    static registerValues<T extends Context<any>>(contextCtr: Ctor<T>, data: Partial<T["data"]>): void;
}
