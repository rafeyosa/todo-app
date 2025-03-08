import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Tabs } from "./components/Tabs";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([
    // { input: "Hello! Add your first todo!", complete: true },
    // { input: "Get the groceries!", complete: false },
    // { input: "Learn how to web design", complete: false },
    // { input: "Say hello world", complete: true },
  ]);
  const [selectedTab, setSelectedTab] = useState("Open");

  function handleAddTodo(todo) {
    const newTodos = [
      ...todos,
      { input: todo, complete: false },
    ];
    setTodos(newTodos);
    handleSaveData(newTodos);
  }

  function handleCompleteTodo(index) {
    let newTodos = [...todos]
    let completedTodo = todos[index]
    completedTodo['complete'] = true
    newTodos[index] = completedTodo
    setTodos(newTodos);
    handleSaveData(newTodos);
  }

  function handleDeleteTodo(index) {
    const newTodos = todos.filter((_, todoIndex) => todoIndex !== index);
    setTodos(newTodos);
    handleSaveData(newTodos);
  }

  function handleSaveData(currentTodos) {
    localStorage.setItem("todo-app", JSON.stringify({ todos: currentTodos }));
  }

  useEffect(() => {
    if (!localStorage || !localStorage.getItem("todo-app")) return;
    let db = JSON.parse(localStorage.getItem("todo-app"));
    setTodos(db.todos);
  }, []);

  return (
    <>
      <Header todos={todos} />
      <Tabs
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        todos={todos}
      />
      <TodoList
        selectedTab={selectedTab}
        todos={todos}
        handleCompleteTodo={handleCompleteTodo}
        handleDeleteTodo={handleDeleteTodo}
      />
      <TodoInput handleAddTodo={handleAddTodo} />
    </>
  );
}

export default App;
