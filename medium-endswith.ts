
type R0 = EndsWith<"abc", "bc">; // true
type R1 = EndsWith<"abc", "abc">; // true
type R2 = EndsWith<"abc", "d">; // false

type EndsWith<T extends string, U extends string> = T extends `${any}${U}`
  ? true
  : false;