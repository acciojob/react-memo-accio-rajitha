import React from 'react';

const ReactMemo = React.memo(({ todos }) => {
  console.log('Rendering ReactMemo');
  return (
    <ul>
      {todos.map((todo, idx) => (
        <li key={idx}>{todo}</li>
      ))}
    </ul>
  );
});

export default ReactMemo;
/*
import React from 'react';

// ReactMemo component will not re-render if tasks prop hasn't changed
const ReactMemo = React.memo(({ tasks }) => {
  console.log("Rendering task list using React.memo");
  return (
    <div>
      <h3>Tasks List (Optimized with React.memo)</h3>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
});

export default ReactMemo;
*/