import React from 'react'

const Task = props => {

 const handleTaskClick = e => {
  props.toggleTask(props.task.id)
 }

  return (
    <div>
      <label>
        <input type="checkbox" checked={props.task.completed} onChange={handleTaskClick}/>
        {props.task.title}
      </label>
    </div>
  )
}

export default Task
