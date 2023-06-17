import { instance } from "./index";

export function fetchTodos() {
  return instance
    .get("/todos")
    .then((response) => response)
    .catch((err) => err);
}
