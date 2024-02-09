
type trimmed = Trim<"  Hello World  ">; // expected to be 'Hello World'

type Trim<S> = S extends ` ${infer R}` ? Trim<R> : S;

type Trim<S> = S extends ` ${infer R}`
  ? Trim<R>
  : S extends `${infer L} `
  ? Trim<L>
  : S;

type Whitespace = " " | "\n" | "\t";
type Trim<S> = S extends `${Whitespace}${infer R}`
  ? Trim<R>
  : S extends `${infer L}${Whitespace}`
  ? Trim<L>
  : S;
