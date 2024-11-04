import { useState } from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import initialList from './data/data';
// import './App.css' 
export default function App() {
  const [tasks, setTask] = useState(initialList)
  
  function getNextId(data) {
    const maxId = data.reduce((prev, current) => prev.id > current.id ? prev.id : current.id)
    return maxId +1
  }
  // Heandeler
  const handelAddTask = (NewTaskText) => {
    setTask([
      ...tasks,
      {
        id:getNextId(tasks),
        text: NewTaskText,
        status:false,

      }
    ])
  }

  const handelOnChangeTaks = (updatedTask) => {
    const nextTesk = tasks.map(task => {
      if (task.id === updatedTask.id) {
        return updatedTask
      } else {
        return task
      }
    }) 

    setTask(nextTesk)
  }

  const handelDeleteTask = (deletedTaskId) => {
    
    setTask(tasks.filter((task) => task.id !== deletedTaskId))
    console.log('hello')
  }

  return (
    <>
      <AddTask onAddTask={handelAddTask} />
      <TaskList tasks={tasks} onDelete={handelDeleteTask} onTaskChange={handelOnChangeTaks} />
    </>
  );
}
