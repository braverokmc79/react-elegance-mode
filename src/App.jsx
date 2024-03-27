import {  createRef, useEffect, useRef, useState } from "react";
import Header from "./components/Header.jsx";
import Shop from "./components/Shop.jsx";
import { DUMMY_PRODUCTS } from "./dummy-products.js";
import Product from "./components/Product.jsx";
import CartContextProvider , {CartContext} from "./store/Shopping-cart-context.jsx";
import Footer from "./components/Footer.jsx";


function App() {
  const modalRef=useRef();


  function openCartModal(){
    modalRef.current.showModal();
  }


  return (
    <CartContextProvider openCartModal={openCartModal}>
      <Header ref={modalRef}   />
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>

      <Footer />
      
    </CartContextProvider>
  );
}

export default App;
