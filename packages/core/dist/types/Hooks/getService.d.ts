import { Ctor } from "../Utils/Ctor";
import { Service } from "../Bases/Service/Service";
export declare const getService: <T extends Service>(ctor: Ctor<T>) => T;
export declare const injectService: (target: unknown, propertyKey: string) => void;
