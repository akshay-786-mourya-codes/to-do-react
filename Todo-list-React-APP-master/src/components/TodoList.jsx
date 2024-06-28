import { useEffect, useState } from 'react'; 
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [filteredTodos, setFilteredTodos] = useState([]);

  // Load filteredTodos from local storage when the component mounts or refreshes
  useEffect(() => {
    const storedFilteredTodos = localStorage.getItem('filteredTodos');
    if (storedFilteredTodos) {
      setFilteredTodos(JSON.parse(storedFilteredTodos));
    }
  }, []);

  const todos = useSelector((state) => state.todos);
  const filter = useSelector((state) => state.filter);

  useEffect(() => {
    // Filter todos based on the filter 
    const updatedFilteredTodos = todos.filter((todo) => {
      const matchesFilter = (filter === 'COMPLETED' && todo.completed) ||
        (filter === 'INCOMPLETE' && !todo.completed) ||
        filter === 'ALL';

      return matchesFilter;
    });

    // Update filteredTodos state
    setFilteredTodos(updatedFilteredTodos);

    // Store filteredTodos in local storage
    localStorage.setItem('filteredTodos', JSON.stringify(updatedFilteredTodos));
  }, [todos, filter]); // Run this effect whenever todos, filter

  return (
    <ul>
      <li className="my-2 text-sm italic">All Your Notes Here...</li>
      {filteredTodos.map((todo, index) => (
        <TodoItem key={index} todo={todo} index={index} />
      ))}
    </ul>
  );
};

export default TodoList;
