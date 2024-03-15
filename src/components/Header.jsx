import { useRef , forwardRef, useImperativeHandle, useContext} from 'react';
import CartModal from './CartModal.jsx';
import { CartContext } from '../store/Shopping-cart-context.jsx';

const  Header =  forwardRef(({handleOpenCartClick}, ref) =>{
  const {items} =useContext(CartContext);
  const modal = useRef();
  const cartQuantity = items.length;

  function handleOpenCartClick() {
    modal.current.open();
  }
  


   useImperativeHandle(ref, () => ({
    showModal: () => {
      handleOpenCartClick();
    }
  }));


  let modalActions = <button>닫기</button>;

  if (cartQuantity > 0) {
    modalActions = (
      <>
        <button>닫기</button>
        <button>계산</button>
      </>
    );
  }

  return (
    <>
      <CartModal
        ref={modal}  
        title="장바구니 목록"
        actions={modalActions}
      />
      <header id="main-header">
        <div id="main-title">
          <img src="logo.png" alt="Elegant model" />
          <h1>엘라강스 모드</h1>
        </div>
        <p>
          <button onClick={handleOpenCartClick}>장바구니 ({cartQuantity})</button>
        </p>
      </header>
    </>
  );
});


export default Header