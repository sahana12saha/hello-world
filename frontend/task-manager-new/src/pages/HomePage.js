import React from 'react';
import TaskCard from '../components/TaskCard';

function HomePage() {
  const tasks = [
    { title: 'Task 1', description: 'Description 1' },
    { title: 'Task 2', description: 'Description 2' }
  ];

  return (
    <div>
      <h2>Home Page</h2>
      {tasks.map((task, index) => (
        <TaskCard key={index} task={task} />
      ))}
    </div>
  );
}

export default HomePage;
