import { task as taskFn } from 'folktale/concurrency/task';

interface ITask<T> {
  run(): ITaskExecution<T>;

  map<U>(mapFn: (x: T) => U): ITask<U>;
}

interface ITaskExecution<T> {
  promise(): Promise<T>;
}

interface IResolver {
  resolve(x: any): void;
}

const task: (fn: (resolver: IResolver) => void) => ITask<any> = taskFn;

export const fetch = (): ITask<number> => {
  return task((resolver) => resolver.resolve(100));
};

export const fetchPlus2 = (): ITask<number> => {
  return fetch().map((a: number) => a + 2);
};
