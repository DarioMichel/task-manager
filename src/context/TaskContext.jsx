import { createContext, useState, useEffect } from 'react'
import { tasks as data } from '../data/task'

export const taskContext = createContext()

export const TaskContextProvider = (props) => {
  const [tasks, setTasks] = useState([])

  const createTask = (task) => {
    setTasks([
      ...tasks,
      {
        tittle: task.title,
        id: tasks.length,
        description: task.description,
      },
    ])
  }

  const deleteTask = (taskId) => [
    setTasks(tasks.filter((task) => task.id !== taskId)),
  ]

  useEffect(() => {
    setTasks(data)
  }, [])

  return (
    <taskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
      }}
    >
      {props.children}
    </taskContext.Provider>
  )
}
