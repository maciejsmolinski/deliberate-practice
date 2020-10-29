declare module "folktale/concurrency/task" {

    export interface Task<T> {
        run(): TaskExecution<T>;
        map<A>(mapFn: (x: T) => A): Task<A>;
    }

    interface TaskExecution<T> {
        promise(): Promise<T>;
    }

    interface TaskResolver<T> {
        resolve(x: T): void;
    }

    export function task<T>(fn: (resolver: TaskResolver<T>) => void): Task<T>;
    export function of<T>(value: T): Task<T>;
}
