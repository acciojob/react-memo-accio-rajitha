import React, { useMemo } from 'react';

function UseMemo({ todos }) {
  const memoizedTodos = useMemo(() => {
    console.log('Recomputing todos');
    return todos.map((todo, idx) => <li key={idx}>{todo}</li>);
  }, [todos]);

  return <ul>{memoizedTodos}</ul>;
}

export default UseMemo;
/*
import React, { useMemo } from 'react';

const UseMemo = ({ tasks }) => {
  // useMemo to optimize task list rendering
  const taskList = useMemo(() => {
    console.log("Rendering task list using useMemo");
    return tasks.map((task, index) => <li key={index}>{task}</li>);
  }, [tasks]); // Only re-render when tasks change

  return (
    <div>
      <h3>Tasks List (Optimized with useMemo)</h3>
      <ul>{taskList}</ul>
    </div>
  );
};

export default UseMemo;
*/