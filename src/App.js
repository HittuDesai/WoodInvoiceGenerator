import React, {useState} from 'react';
import AddWood from "./addWood";
import {FormContext} from "./FormContext";
import {CartViewContext} from "./CartViewContext";
import {CartContext} from "./CartContext"
import CartView from "./CartView";

function convertArrayToExcel(array) {}

function convertTableToArray() {
  var finalArray = [];
  let rows = document.querySelectorAll("tr");
  if (rows.length === 0 || rows.length === 1) {
    alert("You need to add at least one item to the cart");
  } else {
    for (let i = 1; i < rows.length; i++) {
      let rowContent = rows[i].innerText.split("\t");
      rowContent.pop();
      rowContent.unshift(i);
      finalArray.push(rowContent);
    }
  }
  console.log(finalArray);
  convertArrayToExcel(finalArray);
}

export default function App() {
  const [showForm, setShowForm] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState([]);
  return(
      <main className="container">
      <section className="left">
      <p className="title">Manage Your Order</p>
      <div className="wood">
        <CartContext.Provider value={{cart, setCart}}><CartViewContext.Provider value={{showCart, setShowCart}}><FormContext.Provider value={{showForm, setShowForm}}><AddWood /></FormContext.Provider></CartViewContext.Provider></CartContext.Provider>
      </div>
      </section>
      <section className="right">
      <p className="title">Your Cart</p>
      <div className="cart">
        <CartContext.Provider value={{cart, setCart}}><CartViewContext.Provider value={{showCart, setShowCart}}><CartView /></CartViewContext.Provider></CartContext.Provider>
      </div>
      <button className="placeQuote btn" onClick={convertTableToArray}>
          Request Quote
      </button>
      </section>
  </main>
  );
}