import { IProvidableConfig, Providable } from "./Providable";
import { Ctor, Ctors } from "../../Utils/Ctor";
export type ProvideableDictionary<T> = {
    [id: string]: T;
};
export declare abstract class Provider<T extends Providable<IProvidableConfig>> {
    protected providables: ProvideableDictionary<T>;
    load(providables: Ctor<T> | Ctors<T>): void;
    init(): Promise<void>;
    get(providable: Ctor<T> | string): T | never;
    getByPredicate(predicate: (e: T) => boolean): T | undefined;
    all(): ProvideableDictionary<T>;
    protected getIdentifier(providable: Ctor<T>): string;
    protected initOrderBy(a: T, b: T): number;
}
