
type trimmed = TrimLeft<"  Hello World  ">; // expected to be 'Hello World  '

type TrimLeft<S> = S extends `${" " | "\n" | "\t"}${infer T}` ? TrimLeft<T> : S;
