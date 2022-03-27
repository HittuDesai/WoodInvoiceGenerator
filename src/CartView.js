import React, {useContext, useState} from "react";
import "./addWood.css";
import "./form.css";
import "./table.css";
import CartItem from "./cartItem";
import {CartViewContext} from "./CartViewContext"
import {CartContext} from "./CartContext"
import sad from "./img/sad.png";

export default function CartView() {
  const {showCart} = useContext(CartViewContext);
  const {cart} = useContext(CartContext);
  if(showCart === false) {
    return (
      <React.Fragment>
        <p className="subTitle">Looks like your cart is empty!</p>
        <img src={sad} alt="" />
      </React.Fragment>
    );
  }
  else {
    return (
      <React.Fragment>
        <table id="cartSummary">
          <thead><tr className="tableTitle">
            <th>Type</th>
            <th>Thickness</th>
            <th>Length</th>
            <th>Breadth</th>
            <th>Quantity</th>
            <th>Remove</th>
          </tr></thead>
          {cart.map(element => {
            return (<React.Fragment><CartItem item={element} index={cart.indexOf(element)}/></React.Fragment>);
          })}
        </table>
      </React.Fragment>
    );
  }
}

