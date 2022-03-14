import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [newSelectedCategory, setNewSelectedCategory] = useState("Code");
  const [newName, setNewName] = useState("");
  const optionsArray = categories.map(category => {
    if (category !== "All") {
      return <option key={category}>{category}</option>
    } else {
      return null
    }
  })

  function changeSelect(event) {
    setNewSelectedCategory(event.target.value);
  }

  function changeName(event) {
    setNewName(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    const newTask = {
      text: newName,
      category: newSelectedCategory
    }
    onTaskFormSubmit(newTask);
  }

  return (
    <form className="new-task-form" onSubmit={handleFormSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={changeName} value={newName}/>
      </label>
      <label>
        Category
        <select name="category" onChange={changeSelect}>
          {optionsArray}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
