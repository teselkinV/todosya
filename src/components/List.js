import Todo from "./Todo";

const List = ({ todos, handleRemove }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <Todo todo={todo} key={todo.id} handleRemove={handleRemove} />
      ))}
    </ul>
  );
};

export default List;
