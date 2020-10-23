declare module "folktale/concurrency/task" {

    export interface ITask<T> {
        run(): ITaskExecution<T>;

        map<U>(mapFn: (x: T) => U): ITask<U>;
    }

    interface ITaskExecution<T> {
        promise(): Promise<T>;
    }

    interface IResolver<T> {
        resolve(x: T): void;
    }

    export function task<T>(fn: (resolver: IResolver<T>) => void): ITask<T>;
    export function of<T>(value: T): ITask<T>;
}
