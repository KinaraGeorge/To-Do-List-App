import React, { useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const   
 handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="container mx-auto   
 px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4">To-Do List</h1>
      <div className="flex items-center mb-4">
        <input
          type="text"
          className="border rounded px-4 py-2 w-full"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded ml-2"
          onClick={handleAddTask}
        >
          Add
        </button>
      </div>
      <ul className="list-disc">
        {tasks.map((task, index) => (
          <li key={index} className="mb-2">
            {task}
            <button
              className="float-right text-red-500 ml-2"
              onClick={() => handleDeleteTask(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;