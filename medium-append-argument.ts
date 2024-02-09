
type Fn = (a: number, b: string) => number;

// expected be (a: number, b: string, x: boolean) => number
type Result = AppendArgument<Fn, boolean>;
type AppendArgument<Fn, A> = Fn extends (...args: [...infer P]) => infer R
  ? (...args: [...P, A]) => R
  : never;