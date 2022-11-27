export type Ctor<T> = new (...args: any[]) => T;
export type Ctors<T> = Ctor<T>[];
