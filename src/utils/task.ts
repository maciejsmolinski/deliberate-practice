import { task, of, ITask } from 'folktale/concurrency/task';

export { task, of, ITask };

/**
 * Returns a task which resolves successfully after given timeout
 */
export const delayed = <T>(value: T, timeout: number): ITask<T> =>
  task(resolver => setTimeout(() => resolver.resolve(value), timeout));
