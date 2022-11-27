import { IProvidableConfig, Providable } from "./Providable";
import { Ctor, Ctors } from "../Utils/Ctor";
export declare abstract class Provider<T extends Providable<IProvidableConfig>> {
    protected providables: Record<string, T>;
    load(providables: Ctor<T> | Ctors<T>): void;
    init(): Promise<void>;
    protected getIdentifier(providable: T): string;
    protected initOrderBy(a: T, b: T): number;
}
