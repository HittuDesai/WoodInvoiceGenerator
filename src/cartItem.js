import React from "react";
import {useContext} from "react";
import {CartContext} from "./CartContext";
import "./cartItem.css";
import "./table.css";

// const handleRemove = (index) => {
//   let parent = document.querySelectorAll("div.item");
//   while (parent.firstChild) {
//     parent.firstChild.remove();
//   }
//   console.log(index);
//   console.log(cart);
//   prevCart = cart;
//   cart = [];
//   for (let i = 0; i < prevCart.length; i += 1) {
//     if (i === index) {
//       continue;
//     } else {
//       cart.push(prevCart[i]);
//     }
//   }
//   for (let i = 0; i < cart.length; i += 1) {
//     cart[i][0] = i;
//   }
//   console.log(cart);
//   ReactDOM.render(
//     <table id="cartSummary">
//       <tr className="tableTitle">
//         <th>Type</th>
//         <th>Thickness</th>
//         <th>Length</th>
//         <th>Breadth</th>
//         <th>Quantity</th>
//         <th>Remove</th>
//       </tr>
//       {cart.map((array) => (
//         <tr id={array[0]}>
//           <td id="woodType">{array[1]}</td>
//           <td id="thickness">{array[2]}</td>
//           <td id="length">{array[3]}</td>
//           <td id="breadth">{array[4]}</td>
//           <td id="quantity">{array[5]}</td>
//           <td id="remove">
//             <button
//               onClick={() => {
//                 handleRemove(array[0]);
//               }}
//             >
//               Remove
//             </button>
//           </td>
//         </tr>
//       ))}
//     </table>,

//     document.querySelector("div.cart")
//   );
// };

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
      <tbody><tr id={index}>
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
