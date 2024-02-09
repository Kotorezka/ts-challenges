// expected to be `false`
type isPillarMen = Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Dio">;

type Includes<T extends unknown[], U> = U extends T[number] ? true : false;
