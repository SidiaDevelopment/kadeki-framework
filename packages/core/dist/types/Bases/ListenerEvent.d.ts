export declare class ListenerEvent<T> {
    protected listeners: ((data: T) => void)[];
    emit(data: T): void;
    addListener(listener: (data: T) => void): void;
    removeListener(listener: (data: T) => void): void;
}
