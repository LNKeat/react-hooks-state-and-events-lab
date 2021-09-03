import React from "react";
import Item from "./Item";
import { useState } from "react";

function ShoppingList({ items }) {
const [selectedCategory, setSelectedCategory] = useState("All");

function handleSelection(e){
  // setIsDarkMode((isDarkMode)=> !isDarkMode )
  setSelectedCategory(e.target.value)
}

// const filterItems = (items) => {
//   if(selectedCategory === "All"){
//     return items
//   }else{
//     const filteredItems = items.filter(item => {
//       if(item.category === selectedCategory){
//         return item
//       }
//     })
//     return filteredItems
//   }
// }
const filtered = items.filter(item => {
  if(selectedCategory === "All"){
    return item
  }else{
    return item.category === selectedCategory
  }
})

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <p>{selectedCategory}</p>
        <select name="filter" onChange={handleSelection}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filtered.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
