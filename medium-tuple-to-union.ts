
type Arr = ["1", "2", "3"];
const a: TupleToUnion<Arr>; // expected to be '1' | '2' | '3'

type TupleToUnion<T extends unknown[]> = T[number];
