import React, { useState } from 'react';
import UseMemo from './UseMemo';
import ReactMemo from './ReactMemo';

function App() {
  const [todos, setTodos] = useState(['New todo']);
  const [counter, setCounter] = useState(0);
  const [task, setTask] = useState('');
  const [error, setError] = useState('');

  const handleAddTodo = () => {
    setTodos((prevTodos) => [...prevTodos, 'New todo']);
  };

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleTaskChange = (e) => {
    setTask(e.target.value);
    if (e.target.value.length <= 5) {
      setError('Task must be longer than 5 characters');
    } else {
      setError('');
    }
  };

  const handleSubmitTask = () => {
    if (task.length > 5) {
      setTodos((prevTodos) => [...prevTodos, task]);
      setTask('');
    } else {
      setError('Task must be longer than 5 characters');
    }
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handleIncrement}>Increment Counter</button>
      <p>Counter: {counter}</p>

      <input
        type="text"
        value={task}
        onChange={handleTaskChange}
        id="memo-input"
        placeholder="Enter custom task"
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={handleSubmitTask} id="submit-btn">Submit</button>

      <h2>Todos</h2>
      <UseMemo todos={todos} />

      <h2>React Memo Todos</h2>
      <ReactMemo todos={todos} />
    </div>
  );
}

export default App;
/*
import React, { useState } from 'react';
import UseMemo from './UseMemo';
import ReactMemo from './ReactMemo';

const App = () => {
  const [tasks, setTasks] = useState(['New todo']);
  const [counter, setCounter] = useState(0);
  const [customTask, setCustomTask] = useState('');

  // Handle adding default task
  const addTodo = () => {
    setTasks((prevTasks) => [...prevTasks, 'New todo']);
  };

  // Handle incrementing counter
  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  // Handle adding custom task
  const addCustomTask = () => {
    if (customTask.length > 5) {
      setTasks((prevTasks) => [...prevTasks, customTask]);
      setCustomTask(''); // Reset input after adding
    } else {
      alert("Task must be more than 5 characters.");
    }
  };

  return (
    <div>
      <h1>Task Management</h1>
      <button onClick={addTodo}>Add Todo</button>
      <button onClick={incrementCounter}>Increment Counter</button>
      <p>Counter: {counter}</p>
      <div>
        <input
          type="text"
          value={customTask}
          onChange={(e) => setCustomTask(e.target.value)}
          placeholder="Enter custom task (min. 5 characters)"
        />
        <button onClick={addCustomTask}>Submit Custom Task</button>
      </div>

      <h2>Tasks</h2>
      <UseMemo tasks={tasks} />
      <ReactMemo tasks={tasks} />
    </div>
  );
};

export default App;
/*
<p>Now I can render any React component on any DOM node I want using ReactDOM.render</p>

*/