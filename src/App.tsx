import { useState } from "react";
import "./App.css";

interface Task {
  id: string;
  text: string;
  category: string;
  priority: string;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([
        ...tasks,
        {
          id: crypto.randomUUID(),
          text: newTask,
          category: "other",
          priority: "low",
        },
      ]);
      setNewTask("");
    }
  };

  return (
    <div className="App">
      <h1>ToDoList</h1>
      <input type="text" value={newTask} onChange={handleInputChange} />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text}
            <select
              value={task.category}
              onChange={(e) => {
                const updatedTasks = tasks.map((t) => {
                  if (t.id === task.id) {
                    return { ...t, category: e.target.value };
                  }
                  return t;
                });
                setTasks(updatedTasks);
              }}
            >
              <option value="work">Work</option>
              <option value="house">House</option>
              <option value="other">Other</option>
            </select>
            <select
              value={task.priority}
              onChange={(e) => {
                const updatedTasks = tasks.map((t) => {
                  if (t.id === task.id) {
                    return { ...t, priority: e.target.value };
                  }
                  return t;
                });
                setTasks(updatedTasks);
              }}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
