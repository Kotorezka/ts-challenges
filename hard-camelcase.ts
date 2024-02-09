type camelCased = CamelCase<"foo-bar-baz">; // expected "fooBarBaz"

type CamelCase<S> = S extends `${infer H}-${infer T}`
  ? T extends Capitalize<T>
    ? `${H}-${CamelCase<T>}`
    : `${H}${CamelCase<Capitalize<T>>}`
  : S;