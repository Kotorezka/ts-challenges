
interface Todo {
  readonly title: string;
  readonly description: string;
  readonly completed: boolean;
}

// { title: string; description: string; completed: boolean; }
type MutableTodo = Mutable<T>;

type Mutable<T> = { -readonly [P in keyof T]: T[P] };
