import {Ctor} from "../Utils/Ctor";
import {useContext} from "./useContext";
import {ProviderContext} from "../Contexts/ProviderContext";
import {Service} from "../Bases/Service/Service";

export const getService = <T extends Service>(ctor: Ctor<T>): T => {
    const {serviceProvider} = useContext(ProviderContext);
    return serviceProvider.get(ctor) as T;
}

export const injectService = (target: unknown, propertyKey: string): void => {
    const t = Reflect.getMetadata("design:type", target as object, propertyKey);
    const getter = () => {
        return getService(t);
    };
    const setter = () => {
        return;
    };
    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter
    });
};
