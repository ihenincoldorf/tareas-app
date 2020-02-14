import React from 'react'
import Task from '../Task/Task'

const TasksList = props => {
  return (
    props
      .tasks
      .map(task =>
        <Task
          key={task.id}
          task={task}
          toggleTask={props.toggleTask}
        />)
  )
}

export default TasksList