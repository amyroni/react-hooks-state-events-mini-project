import React from "react";

function CategoryFilter({ categories, onCategoryClick, selected }) {
  const categoriesArray = categories.map(category => {
    return (
      <button 
        key={category} 
        className={(selected === category) ? "selected" : "" } 
        onClick={() => onCategoryClick(category)}>
          {category}
      </button>
    )
  })
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoriesArray}
    </div>
  );
}

export default CategoryFilter;
