import {IProvidableConfig, Providable} from "./Providable"
import {Ctor, Ctors} from "../../Utils/Ctor"

export abstract class Provider<T extends Providable<IProvidableConfig>> {
    protected providables: Record<string, T> = {};

    public load(providables: Ctor<T> | Ctors<T>): void {
        let constructors: Ctors<T> = Array.isArray(providables) ? providables : [providables];

        for (let ctr of constructors) {
            const providable = new ctr();

            const identifier = this.getIdentifier(providable);

            this.providables[identifier] = providable;
        }
    }

    public async init(): Promise<void> {
        const providables = Object.values(this.providables).sort(this.initOrderBy);
        for (let providable of providables) {
            await providable.init();
        }
    }

    protected getIdentifier(providable: T): string {
        return providable.constructor.name;
    }

    protected initOrderBy(a: T, b: T) {
        return a.config.priority - b.config.priority;
    }
}
