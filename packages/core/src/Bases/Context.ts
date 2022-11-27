import {Ctor} from "../Utils/Ctor"

export abstract class Context<T extends Record<string, any>> {
    public data!: T;

    public getData(): T {
        return this.data as T;
    }

    public addData(data: Partial<T>) {
        if (!this.data)
            this.data = {} as T;
        this.data = {...this.data, ...data};
    }

    public create(): void {
        ContextStorage.register(this);
    }
}

export class ContextStorage {
    protected static storage: Record<string, Context<any>> = {};
    protected static hooks: Record<string, object[]> = {};
    protected static isInitialized: boolean = false;

    public static register(context: Context<any>) {
        const name = context.constructor.name;
        ContextStorage.storage[name] = context;
    }

    public static get<T extends Context<any>>(contextCtr: Ctor<T>): T["data"] {
        const name = contextCtr.name;
        if (!ContextStorage.storage.hasOwnProperty(name))
            throw Error(`Tried to get non-registered context ${name}`);

        return ContextStorage.storage[name].getData();
    }

    public static loadValues() {
        for (let hooksKey in ContextStorage.hooks) {
            if (!Object.prototype.hasOwnProperty.call(ContextStorage.storage, hooksKey)) {
                continue;
            }
            const hooks = ContextStorage.hooks[hooksKey];
            for (let hook of hooks) {
                ContextStorage.storage[hooksKey].addData(hook);
            }
        }

        ContextStorage.isInitialized = true;
    }

    public static registerValues<T extends Context<any>>(contextCtr: Ctor<T>, data: Partial<T["data"]>): void {
        const name = contextCtr.name;

        if (ContextStorage.isInitialized) {
            if (!Object.prototype.hasOwnProperty.call(ContextStorage.storage, name))
                return;

            ContextStorage.storage[name].addData(data);
            return;
        }

        if (!Object.prototype.hasOwnProperty.call(ContextStorage.hooks, name)) {
            ContextStorage.hooks[name] = [data];
            return;
        }

        ContextStorage.hooks[name].push(data);
    }
}
