import React, {useState} from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false)
  const liClass = isInCart ? "in-cart" : ""
  function handleClick(){
    setIsInCart((isInCart)=> !isInCart)
  }
  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{isInCart ? "Remove": "Add to Cart"}</button>
    </li>
  );
}

export default Item;
