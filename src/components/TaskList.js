import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDelete, category }) {
  const tasksToDisplay = tasks.filter(task => {
    if (category === "All") {
      return true
    } else {
      return task.category === category;
    }
  })
  
  const tasksArray = tasksToDisplay.map(task => {
    return <Task key={task.text} onDelete={onDelete} text={task.text} category={task.category} />
  })

  return (
    <div className="tasks">
      {tasksArray}
    </div>
  );
}

export default TaskList;
