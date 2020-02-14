import React, { useState, useRef, useEffect } from 'react';
import TasksList from './Components/TasksList/TasksList'
import uuidv4 from 'uuid/v4'

const LOCAL_STORAGE_KEY = 'taskApp.task'

function App() {
  const [tasks, setTasks] = useState([])
  const taskRefName = useRef()

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTasks) setTasks(storedTasks)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks))
  }, [tasks])

  const handleAddTask = e => {
    const name = taskRefName.current.value
    if (name === '') return
    setTasks(prevTasks => {
      return [...prevTasks, { id: uuidv4(), title: name, completed: false }]
    })
    taskRefName.current.value = null
  }

  const toggleTask = id => {
    const newTasks = [...tasks]
    const task = newTasks.find(task => task.id === id)
    task.completed = !task.completed
    setTasks(newTasks)
  }

  const handleDeleteTasks = () => {
    const currentTasks = tasks.filter(task => !task.completed)
    setTasks(currentTasks)
  }

  return (
    <>
      <TasksList tasks={tasks} toggleTask={toggleTask} />
      <input type="text" ref={taskRefName} />
      <button onClick={handleAddTask}>Agregar tarea</button>
      <button onClick={handleDeleteTasks}>Borrar tareas realizadas</button>
      <p> {tasks.filter(task => !task.completed).length} tareas restantes</p>
    </>
  );
}

export default App;
