import React, { useState, useEffect } from 'react';
import { todoService } from './services/api';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    todoService.getTasks().then(data => {
      setTasks(data);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!newItem.trim()) return;
    const task = await todoService.addTask(newItem);
    setTasks([{ ...task, id: Date.now() }, ...tasks]);
    setNewItem('');
  };

  const handleDelete = async (id) => {
    await todoService.deleteTask(id);
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <div className="container">
      <h1>API To-Do List</h1>
      <form onSubmit={handleAdd} className="input-box">
        <input value={newItem} onChange={(e) => setNewItem(e.target.value)} placeholder="Add task..." />
        <button type="submit">Add</button>
      </form>

      {loading ? <div className="spinner"></div> : (
        <ul className="list">
          {tasks.map(task => (
            <li key={task.id}>
              {task.title}
              <button className="del-btn" onClick={() => handleDelete(task.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;