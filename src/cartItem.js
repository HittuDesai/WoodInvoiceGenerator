import React from "react";
import {useContext} from "react";
import {CartContext} from "./CartContext";
import "./cartItem.css";
import "./table.css";

function CartItem(props) {
  var item = props.item;
  var index = props.index;
  const {cart, setCart} = useContext(CartContext);

  const handleRemove = (index) => {
    console.log("Removed Index = ", index);
    cart.splice(index, 1);
    setCart([...cart]);
  }

  return (
    <React.Fragment>
      <tbody><tr id={index.toString()}>
        <td id="woodType">{item["WoodType"]}</td>
        <td id="thickness">{item["Thickness"]}</td>
        <td id="length">{item["Length"]}</td>
        <td id="breadth">{item["Breadth"]}</td>
        <td id="quantity">{item["Quantity"]}</td>
        <td id="remove">
          <button
            onClick={() => {
              handleRemove(index);
            }}
          >
            Remove
          </button>
        </td>
      </tr></tbody>
    </React.Fragment>
  );
}

export default CartItem;
