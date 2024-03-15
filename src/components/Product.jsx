import { useContext } from "react";
import { CartContext } from "../store/Shopping-cart-context";

export default function Product({id,image,title,price,description}) {

 const {addItemToCart} =useContext(CartContext);


  return (
    <article className="product">
      <img src={image} alt={title} />
      <div className="product-content">
        <div>
          <h3>{title}</h3>
          <p className='product-price'>₩{price.toLocaleString('ko-KR')}</p>
          <p>{description}</p>
        </div>
        <p className='product-actions'>
          <button onClick={()=>addItemToCart(id)}>장바구니 담기</button>
        </p>
      </div>
    </article>
  );
}
