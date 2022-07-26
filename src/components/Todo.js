const Todo = ({ todo, handleRemove }) => {
  const remove = () => {
    handleRemove(todo.id);
  };
  return (
    <div>
      <li>
        <strong>{todo.id}</strong> {todo.task}
        <button>
          <i onClick={remove}> remove</i>
        </button>
      </li>
    </div>
  );
};

export default Todo;
