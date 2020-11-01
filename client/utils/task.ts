import { task, of, Task } from 'folktale/concurrency/task';

export { task, of, Task };

/**
 * Returns a task which resolves successfully after given timeout
 */
export const delayed = <T>(value: T, timeout: number): Task<T> =>
  task(resolver => setTimeout(() => resolver.resolve(value), timeout));
