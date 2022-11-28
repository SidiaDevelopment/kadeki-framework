export declare class EventListener<T> {
    protected listeners: ((data: T) => Promise<void>)[];
    emit(data: T): Promise<void>;
    addListener(listener: (data: T) => Promise<void>): void;
}
