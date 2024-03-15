import { useContext } from "react";
import {CartContext} from "../store/Shopping-cart-context";

export default function Cart() {
  const {items, updateItemQuantity} =useContext(CartContext);
  const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity,0).toLocaleString('ko-KR');
  const formattedTotalPrice = `₩${totalPrice}`;

  
  return (
    <div id="cart">
       {items.length===0 && <p>장바구니에 상품이 없습니다! </p>} 

      {items.length > 0 && (
        <ul id="cart-items">
          {items.map((item) => {
            const formattedPrice = `₩${item.price.toLocaleString('ko-KR')}`;

            return (
              <li key={item.id}>
                <div>
                  <span>{item.name}</span>
                  <span> ({formattedPrice})</span>
                </div>
                <div className="cart-item-actions">
                  <button onClick={() => updateItemQuantity(item.id, -1)}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateItemQuantity(item.id, 1)}>
                    +
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <p id="cart-total-price">
      장바구니 합계: <strong>{formattedTotalPrice}</strong>
      </p>
    </div>
  );
}
