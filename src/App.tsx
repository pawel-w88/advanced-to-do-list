import { useState } from 'react'
import './App.css'

interface Task {
  id: string,
  text: string
}

function App() {

  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value)
  };

  const handleAddTask = () => {
    if (newTask.trim() !== ''){
      setTasks([...tasks, {id: crypto.randomUUID(), text: newTask}]);
      setNewTask('');
    }
  }

  return (
    <div className='App'>
      <h1>ToDoList</h1>
      <input type="text" value={newTask} onChange={handleInputChange} />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.text}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
