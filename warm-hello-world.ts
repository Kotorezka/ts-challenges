// expected to be string
type HelloWorld = any;

// you should make this work
type test = Expect<Equal<HelloWorld, string>>;

type HelloWorld = string;
