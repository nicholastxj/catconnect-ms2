import React, { useState } from 'react';
import './TaskManagerPage.css';
import Header from './Header';

function TaskManagerPage() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [taskDetails, setTaskDetails] = useState('');

  const handleTaskNameChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleTaskDetailsChange = (e) => {
    setTaskDetails(e.target.value);
  };

  const handleAddTask = () => {
    if (taskName.trim() === '') {
      return; // Do not add empty task name
    }

    const newTask = {
      id: Date.now(),
      name: taskName,
      details: taskDetails,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
    setTaskName('');
    setTaskDetails('');
  };

  const handleDeleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <div>
    <Header />
    <div className="task-manager-container">
      <h2>Task Manager</h2>
      <div>
        <h3>Add Task</h3>
        <div>
          <label htmlFor="task-name">Task Name:</label>
          <input
            type="text"
            id="task-name"
            value={taskName}
            onChange={handleTaskNameChange}
          />
        </div>
        <div>
          <label htmlFor="task-details">Task Details:</label>
          <textarea
            id="task-details"
            value={taskDetails}
            onChange={handleTaskDetailsChange}
          />
        </div>
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <div>
        <h3>Task List</h3>
        {tasks.length === 0 ? (
          <p>No tasks added yet.</p>
        ) : (
          <ul>
            {tasks.map((task) => (
              <li key={task.id}>
                <h4>{task.name}</h4>
                <p>{task.details}</p>
                <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
    </div>
  );
}

export default TaskManagerPage;
