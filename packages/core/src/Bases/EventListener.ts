export class EventListener<T> {
    protected listeners: ((data: T) => Promise<void>)[] = [];

    public async emit(data: T): Promise<void> {
        for (let listener of this.listeners) {
            await listener(data);
        }
    }

    public addListener(listener: (data: T) => Promise<void>): void {
        this.listeners.push(listener);
    }
}
