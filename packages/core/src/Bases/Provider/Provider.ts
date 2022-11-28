import {IProvidableConfig, Providable} from "./Providable"
import {Ctor, Ctors} from "../../Utils/Ctor"
import {useContext} from "../../Hooks/useContext";
import {LoggingContext} from "../../Contexts/LoggingContext";

export type ProvideableDictionary<T> = {[id: string]: T};
export abstract class Provider<T extends Providable<IProvidableConfig>> {
    protected providables: ProvideableDictionary<T> = {};

    public load(providables: Ctor<T> | Ctors<T>): void {
        let constructors: Ctors<T> = Array.isArray(providables) ? providables : [providables];

        for (let ctr of constructors) {
            const providable = new ctr();
            const identifier = this.getIdentifier(ctr);

            this.providables[identifier] = providable;
        }
    }

    public async init(): Promise<void> {
        const providables = Object.values(this.providables).sort(this.initOrderBy);
        for (let providable of providables) {
            await providable.init();
        }
    }

    public get(providable: Ctor<T> | string): T | never {
        const name = typeof providable == "string" ? providable : this.getIdentifier(providable);

        if (!Object.prototype.hasOwnProperty.call(this.providables, name)) {
            const {logger} = useContext(LoggingContext);
            logger.error(`Tried getting unloaded providable: ${name}`);
        }

        return this.providables[name];
    }

    public getByPredicate(predicate: (e: T) => boolean): T | undefined {
        return Object.values(this.providables).find(predicate);
    }

    public all(): ProvideableDictionary<T> {
        return this.providables;
    }

    protected getIdentifier(providable: Ctor<T>): string {
        return providable.name;
    }

    protected initOrderBy(a: T, b: T) {
        return a.config.priority - b.config.priority;
    }
}
