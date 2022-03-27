import React, {useContext} from "react";
import "./addWood.css";
import "./form.css";
import "./table.css";
// import CartItem from "./cartItem";
import Form from "./Form";
import {FormContext} from "./FormContext"
import {CartViewContext} from "./CartViewContext"
import {CartContext} from "./CartContext"

export default function AddWood() {
  const {cart, setCart} = useContext(CartContext);
  const {showForm, setShowForm} = useContext(FormContext);
  const {showCart, setShowCart} = useContext(CartViewContext);
  if(showForm === false) {
    return (
      <React.Fragment>
        <div className="actionButtons">
          <button onClick={() => setShowForm(true)} className="addWood btn">
            Add Wood
          </button>
        </div>
      </React.Fragment>
    );
  }
  else {
    return (
      <React.Fragment>
        <CartViewContext.Provider value={{showCart, setShowCart}}><CartContext.Provider value={{cart, setCart}}><Form /></CartContext.Provider></CartViewContext.Provider>
      </React.Fragment>
    );
  }
}
