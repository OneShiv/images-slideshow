import { useCallback, useEffect, useMemo, useState } from "react";
import { fetchTodos } from "../api/utils";
import Filter from "./Filter";
import Todo from "./Todo";

function Todos() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    // console.log("called");
    (async function () {
      const response = await fetchTodos();
      setTodos(response.data.todos);
    })();
  }, []);

  const memoizedTodos = useMemo(() => getFilterAppliedTodos(todos, filter), [
    filter,
    todos
  ]);

  // console.log("render");

  const onCheck = useCallback(
    (checked, id) => {
      const newTodos = todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: checked
          };
        }
        return todo;
      });
      setTodos(newTodos);
    },
    [todos]
  );
  return (
    <>
      <h2>Todos</h2>
      <Filter onClick={setFilter} />
      <ul>
        {memoizedTodos.map((todo) => {
          return <Todo key={todo.id} {...todo} onCheck={onCheck} />;
        })}
      </ul>
      {todos.length === 0 && <p>No Todos</p>}
    </>
  );
}

export default Todos;

function getFilterAppliedTodos(todos, filter = "all") {
  if (filter === "all") {
    return todos;
  }
  if (filter === "completed") {
    return todos.filter((todo) => todo.completed);
  }
  return todos.filter((todo) => !todo.completed);
}
