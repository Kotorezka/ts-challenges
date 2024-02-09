
type flatten = Flatten<[1, 2, [3, 4], [[[5]]]> // [1, 2, 3, 4, 5]

type Flatten<T> = T extends []
  ? []
  : T extends [infer H, ...infer T]
  ? [...Flatten<H>, ...Flatten<T>]
  : [T];
