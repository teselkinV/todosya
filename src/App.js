import "./App.css";
import { useState } from "react";

import Form from "./components/Form";
import List from "./components/List";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };

  const removeAll = () => {
    setTodos([]);
  };

  const handleRemove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <h1>Todos</h1>
      <Form addTodo={addTodo} />
      <List todos={todos} handleRemove={handleRemove} />
      <button onClick={removeAll}>remove all</button>
    </div>
  );
}

export default App;
