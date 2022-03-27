import React, {useContext} from 'react';
import {CartContext} from "./CartContext";
import {CartViewContext} from "./CartViewContext";

export default function Form () {
    var WoodType = "default";
    var Thickness = 0;
    var Length = 0;
    var Breadth = 0;
    var Quantity = 0;
    const {cart, setCart} = useContext(CartContext);
    const {showCart, setShowCart} = useContext(CartViewContext);

    const doesItemExist = (incomingItem) => {
      cart.forEach((item) => {
        if (incomingItem.WoodType === item.WoodType && incomingItem.Thickness === item.Thickness && incomingItem.Length === item.Length  && incomingItem.Breadth === item.Breadth)
          return true;
        });
        return false;
      }

    const handleSubmit = (e) => {
        e.preventDefault();
        var incomingItem = {WoodType, Thickness, Length, Breadth, Quantity};
        if (incomingItem["WoodType"] === "default" || incomingItem["Thickness"] === 0 || incomingItem["Length"] === 0 || incomingItem["Breadth"] === 0 || incomingItem["Quantity"] === 0) {
            alert("Error in adding item. All fields are compulsary.");
        }
        else if (doesItemExist(incomingItem)) {
            console.log("Already Exists");
        }
        else {
            setCart([...cart, incomingItem]);
            setShowCart(true);
            document.querySelector("form").reset();
        }
    }

    return (
        <React.Fragment>
            <form onSubmit={(e) => handleSubmit(e)}>
            <label id="typeOfWood" htmlFor="woodType">
                Wood Type:
                <select
                name="WoodType"
                id="woodType"
                onChange={(e) => {
                    WoodType = e.target.value;
                }}
                defaultValue="default"
                >
                <option value="default">&lt;-Select Wood-&gt;</option>
                <option value="Pinewood">Pinewood</option>
                <option value="Teakwood">Teakwood</option>
                <option value="Mahagony">Mahogany</option>
                <option value="Firewood">Firewood</option>
                <option value="Rubberwood">Rubberwood</option>
                </select>
            </label>
            <br />
            <label htmlFor="thickness">
                Thickness:
                <input
                type="number"
                name="Thickness"
                id="thickness"
                onChange={(e) => {
                    Thickness = e.target.value;
                }}
                defaultValue="0"
                />
            </label>
            <br />
            <br />
            <label htmlFor="length">
                Length:
                <input
                type="number"
                name="Length"
                id="length"
                onChange={(e) => {
                    Length = e.target.value;
                }}
                defaultValue="0"
                />
            </label>
            <br />
            <br />
            <label htmlFor="breadth">
                Breadth:
                <input
                type="number"
                name="Breadth"
                id="breadth"
                onChange={(e) => {
                    Breadth = e.target.value;
                }}
                defaultValue="0"
                />
            </label>
            <br />
            <br />
            <label htmlFor="quantity">
                Quantity:
                <input
                type="number"
                name="Quantity"
                id="quantity"
                onChange={(e) => {
                    Quantity = e.target.value;
                }}
                defaultValue="0"
                />
            </label>
            <br />
            <br />
            <input type="submit" value="Add" className="btn" id="addWoodToCart" />
            </form>
            <br />
            <div className="formStatus"></div>
        </React.Fragment>
    );


  



//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const incomingItem = {WoodType, Thickness, Length, Breadth, Quantity};
//     if (incomingItem.WoodType === defaultItem.WoodType || incomingItem.Thickness === defaultItem.Thickness || incomingItem.Length === defaultItem.Length  || incomingItem.Breadth === defaultItem.Breadth || incomingItem.Quantity === defaultItem.Quantity) {
//       ReactDOM.render(
//         <p className="failure">
//           Error in adding item. All fields are compulsary.
//         </p>,
//         document.querySelector("div.formStatus")
//       );
//     }
//     else if (doesItemExist(incomingItem) === true) {
//       ReactDOM.render(
//         <p className="failure">
//           You already added this item. Change at least one specification to
//           proceed.
//         </p>,
//         document.querySelector("div.formStatus")
//       );
//     }
//     else {
//       setCart(incomingItem);
//       console.log(cart);
      // ReactDOM.render(
      //   <table id="cartSummary">
      //     <tr className="tableTitle">
      //       <th>Type</th>
      //       <th>Thickness</th>
      //       <th>Length</th>
      //       <th>Breadth</th>
      //       <th>Quantity</th>
      //       <th>Remove</th>
      //     </tr>
      //     <CartItem woodSpecs={woodSpecs} />
      //   </table>,
      //   document.querySelector("div.cart")
      // );
      // index += 1;
      // ReactDOM.render(
      //   <p className="success">Item successfully added to cart</p>,
      //   document.querySelector("div.formStatus")
      // );
//     }
//   };
}

// export default function Form () {
//     return (
//         <h1>Hello</h1>
//     );
// }