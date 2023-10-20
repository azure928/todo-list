import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  // react way
  const [todos, setTodos] = useState(["할일 1", "할일 2"]);

  return (
    // JSX (JS -> HTML)
    <div className="App">
      <h1>TODO LIST</h1>
      <div>
        <input />
        <button>ADD</button>
      </div>
      {todos.map((todo, index)=> (
        <div key={index}>
          <input type='checkbox' />
          <span>{todo}</span>
          <button>DEL</button>
        </div>
      ))}
    </div>
  );
}

export default App;
