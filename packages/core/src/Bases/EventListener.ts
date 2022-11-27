export class EventListener<T> {
    protected listeners: ((data: T) => void)[] = [];

    public emit(data: T): void {
        for (let listener of this.listeners) {
            listener(data);
        }
    }

    public addListener(listener: (data: T) => void): void {
        this.listeners.push(listener);
    }

    public removeListener(listener: (data: T) => void): void {
        this.listeners = this.listeners.filter(e => e != listener);
    }
}
