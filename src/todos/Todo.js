function Todo({ id, todo, completed, onCheck }) {
  return (
    <li>
      <input
        checked={completed}
        id={todo}
        type="checkbox"
        onChange={(e) => onCheck(e.target.checked, id)}
      />
      <label htmlFor={todo}>{todo}</label>
    </li>
  );
}

export default Todo;
