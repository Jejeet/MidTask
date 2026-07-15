// Keys help React identify which list items have been added, removed, reordered, or updated.
import { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React" },
    { id: 2, text: "Build an app" },
    { id: 3, text: "Deploy to production" },
  ]);

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => removeTodo(todo.id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
}
// React uses the key to match each rendered element with its previous version.

// Without stable keys, React may update the wrong item or unnecessarily recreate elements.