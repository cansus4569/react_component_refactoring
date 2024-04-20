import { useState } from 'react';

function fetchTodos() {
  const result = [];
  for (let i = 0; i < localStorage.length; i++) {
    const value = localStorage.key(i);
    result.push(value);
  }
  return result;
}

function App() {
  // const [count, setCount] = useState(0);
  const [inputText, setInputText] = useState('');
  // const todos = fetchTodos();
  const [todos, setTodos] = useState(fetchTodos());

  const handleInput = (event) => {
    const value = event.target.value;
    setInputText(value);
  };

  const handleClick = () => {
    console.log('clicked');
    localStorage.setItem(inputText, inputText);
    // todos.push(inputText);
    // setTodos((currentTodos) => {
    //   return [...currentTodos, inputText];
    // });
    setTodos([...todos, inputText]); // spread operator 불변성
    setInputText('');
  };

  const handleRemove = (todo, index) => {
    // console.log(todo, index);
    // todos.splice(index, 1);
    // console.log(todos);
    const result = todos.filter((item) => item !== todo);
    setTodos(result);
    localStorage.removeItem(todo);
  };

  return (
    <div>
      <h1>TODO 앱</h1>
      <div>
        <input type="text" value={inputText} onChange={handleInput} />
        <button onClick={handleClick}>Add</button>
      </div>
      <div>
        <ul>
          {todos.map((todo, index) => {
            return (
              <li key={index}>
                <span>{todo}</span>
                <button onClick={() => handleRemove(todo, index)}>
                  remove
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
