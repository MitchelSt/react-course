import { useState } from "react";
import "./App.css";

export default function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);

  const onSubmit = async (e) => {
    e.preventDefault();

    setTimeout(() => {
      setTodos((prev) => [
        ...prev,
        {
          id: Math.floor(Math.random() * 1000),
          title: todoInput,
          checked: false,
        },
      ]);
    }, 500);

    setTodoInput("");
  };

  const toggleTodo = (id) => {
    const filteredTodo = todos.find((todo) => todo.id === id);
    filteredTodo.selected = !filteredTodo.selected;

    setTodos(todos.map((todo) => (todo.id === id ? filteredTodo : todo)));
  };

  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  return (
    <>
      {!authenticated && (
        <>
          <h1>Login</h1>
          <button type="button" onClick={() => setAuthenticated(true)}>
            Click here to login
          </button>
        </>
      )}

      {authenticated && (
        <>
          <h1>Add Todo</h1>
          <form onSubmit={onSubmit}>
            <label htmlFor="title">Title</label>
            <br />
            <input
              type="text"
              id="title"
              value={todoInput}
              onChange={(e) => setTodoInput(e.target.value)}
            />
            <br />
            <button type="submit">Submit</button>
          </form>

          <ul>
            {todos.map((todo) => {
              const { id, title, selected } = todo;
              return (
                <li key={id} data-cy={`todo-${title}`}>
                  <label
                    className={selected ? "todoText" : null}
                    htmlFor={`todoToggle${id}`}
                  >
                    {title}
                  </label>
                  <input
                    type="checkbox"
                    selected={selected}
                    id={`todoToggle${id}`}
                    onChange={() => toggleTodo(id)}
                  />
                  <button type="button" onClick={() => deleteTodo(id)}>
                    Remove
                  </button>
                  <br />
                </li>
              );
            })}
          </ul>

          <p>Total Todos: {todos.length}</p>
          <p>Selected Todos: {todos.filter((todo) => todo.selected).length}</p>
        </>
      )}
    </>
  );
}
