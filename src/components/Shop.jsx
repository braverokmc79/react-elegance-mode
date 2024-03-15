import { DUMMY_PRODUCTS } from '../dummy-products.js';
import Product from './Product.jsx';

export default function Shop({ children }) {
  return (
    <section id="shop">
      <h2>지금 가장 인기있는 아이템!</h2>

      <ul id="products">
        {children}
      </ul>
    </section>
  );
}
