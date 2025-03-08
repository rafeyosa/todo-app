import { TodoCard } from "./TodoCard";

export function TodoList(props) {
  const { selectedTab, todos } = props;
  let filteredTodos = [];
  if (selectedTab === "All") filteredTodos = todos;
  if (selectedTab === "Open")
    filteredTodos = todos.filter((val) => !val.complete);
  if (selectedTab === "Completed")
    filteredTodos = todos.filter((val) => val.complete);

  return (
    <>
      {filteredTodos.map((todo, todoIndex) => {
        return (
          <TodoCard
            key={todoIndex}
            todoIndex={todos.findIndex(val => val === todo)}
            todo={todo}
            {...props}
          />
        );
      })}
    </>
  );
}
