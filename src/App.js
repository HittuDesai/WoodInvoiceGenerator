import React, {useState} from 'react';
import AddWood from "./addWood";
import {FormContext} from "./FormContext";
import {CartViewContext} from "./CartViewContext";
import {CartContext} from "./CartContext"
import CartView from "./CartView";

export default function App() {
  const [showForm, setShowForm] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState([]);
  
  function convertArrayToExcel() {
    console.log(cart);
    var CSV = "";
    cart.forEach(row => {
      for(var column in row) {
        CSV += column + ',';
      }
      CSV += "\r\n";
    });
    CSV = "data:application/csv," + encodeURIComponent(CSV);
    var x = document.createElement("A");
    x.setAttribute("href", CSV);
    x.setAttribute("download","order.csv");
    document.body.appendChild(x);
    x.click();
  }

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
      <button className="placeQuote btn" onClick={convertArrayToExcel}>
          Request Quote
      </button>
      </section>
  </main>
  );
}