
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise<string>((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

// expected to be `Promise<[number, number, string]>`
const p = Promise.all([promise1, promise2, promise3] as const);

declare function PromiseAll<T extends unknown[]>(
  values: readonly [...T],
): Promise<{ [P in keyof T]: T[P] extends Promise<infer R> ? R : T[P] }>;
