import { task as taskFn, of as ofFn } from 'folktale/concurrency/task';

interface ITask<T> {
  run(): ITaskExecution<T>;

  map<U>(mapFn: (x: T) => U): ITask<U>;
}

interface ITaskExecution<T> {
  promise(): Promise<T>;
}

interface IResolver<T> {
  resolve(x: T): void;
}

export const task: <T>(fn: (resolver: IResolver<T>) => void) => ITask<T> = taskFn;

export const of: <T>(value: T) => ITask<T> = ofFn;

export const delayed = <T>(value: T, timeout: number): ITask<T> => task(resolver => setTimeout(() => resolver.resolve(value), timeout));
