
type capitalized = Capitalize<"hello world">; // expected to be 'Hello world'

interface CapitalizedChars {
  f: "F"; // a,b,c,d.....
}
type Capitalize<S> = S extends `${infer C}${infer T}`
  ? `${C extends keyof CapitalizedChars ? CapitalizedChars[C] : C}${T}`
  : S;
