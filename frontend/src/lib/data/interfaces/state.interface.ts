export interface IBaseState<T> {
  data: T[] | T;
  status: "idle" | "loading" | "succeeded" | "failed";
  error?: string | null;
  selected?: T;
}
