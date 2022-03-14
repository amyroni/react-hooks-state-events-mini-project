import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleDelete(deletedTask) {
    const newTasks = tasks.filter(task => {
      return task.text !== deletedTask
    });
    setTasks(newTasks);
  }

  function handleCategoryClick(category) {
    console.log(category)
    setSelectedCategory(category)
  }

  function handleSubmitNewTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onCategoryClick={handleCategoryClick} selected={selectedCategory}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleSubmitNewTask}/>
      <TaskList tasks={tasks} onDelete={handleDelete} category={selectedCategory}/>
    </div>
  );
}

export default App;
