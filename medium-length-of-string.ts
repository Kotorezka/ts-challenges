
type length = LengthOfString<"Hello, World">; // expected to be 12

type LengthOfString<
  S extends string,
  A extends string[] = [],
> = S extends `${infer C}${infer T}`
  ? LengthOfString<T, [C, ...A]>
  : A["length"];
