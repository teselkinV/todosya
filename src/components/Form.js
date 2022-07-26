import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({ addTodo }) => {
  const [todo, setTodo] = useState({
    task: "",
    id: "",
  });

  const handleInput = (e) => {
    setTodo({ ...todo, task: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({ ...todo, id: Math.random() * 2224.987548364 });
    setTodo({ ...todo, task: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="task"
        placeholder="New task"
        value={todo.task}
        onChange={handleInput}
      />
      <button type="submit">Add todo</button>
    </form>
  );
};

export default Form;
