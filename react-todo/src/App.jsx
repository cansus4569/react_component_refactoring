import { useState } from 'react';
import TodoHeader from './components/TodoHeader';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function fetchTodos() {
  const result = [];
  for (let i = 0; i < localStorage.length; i++) {
    const value = localStorage.key(i);
    result.push(value);
  }
  return result;
}

function App() {
  const [todos, setTodos] = useState(fetchTodos());

  const addTodo = (todo) => {
    localStorage.setItem(todo, todo);
    setTodos([...todos, todo]); // spread operator 불변성
  };

  const handleRemove = (todo) => {
    const result = todos.filter((item) => item !== todo);
    setTodos(result);
    localStorage.removeItem(todo);
  };

  return (
    <div>
      <TodoHeader />
      <TodoInput onTodoAdd={addTodo} />
      <TodoList todos={todos} onTodoRemove={handleRemove} />
    </div>
  );
}

export default App;
