import { task, of, ITask } from 'folktale/concurrency/task';

export { task, of };

export const delayed = <T>(value: T, timeout: number): ITask<T> =>
  task(resolver => setTimeout(() => resolver.resolve(value), timeout));
