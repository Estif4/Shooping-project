import React, { useState, useEffect } from 'react';
import './App.css';
import initialProducts from './Dummy-products';
import Header from './component/Header';
import Shop from './component/Shop';
import CartModal from './component/CartModal';

function App() {
  const [cartItem, setcartItem] = useState([]);
  const [displayModal, setdisplaymodal] = useState(false);
  const [toggleCart, setToggleCart] = useState(true);
  const [stateofitem , setStateOfItem] = useState(true);
  const [products, setProducts] = useState(initialProducts);

  function selectCartItem(id) {
    const selectedItem = products.find((item) => item.id === id);

    if (selectedItem) {
      const isItemInCart = cartItem.some((item) => item.id === id);

      if (!isItemInCart) {
        setcartItem((prev) => [...prev, { ...selectedItem, selected: true }]);

        
        setProducts((prevProducts) =>
          prevProducts.map((item) =>
            item.id === id ? { ...item, selected: true } : item
          )
        );
      }
    }
  }

  function removeCartItem(id) {
    const updatedCart = cartItem.filter((item) => item.id !== id);
    setcartItem(updatedCart);
console.log('this is to delete ')
   
    setProducts((prevProducts) =>
      prevProducts.map((item) =>
        item.id === id ? { ...item, selected: false } : item
      )
    );
  }

  useEffect(() => {
    cartItem.forEach((item, index) => {
      console.log(`Item ${index + 1}: selected = ${item.selected}`);
    });
  }, [cartItem]);

  return (
    <>
      <Header cartItem={cartItem} setdisplaymodal={setdisplaymodal} />
      <Shop
        products={products}
        selectCartItem={selectCartItem}
        removeCartItem={removeCartItem}
        toggleCart={toggleCart}
        setStateOfItem={setStateOfItem}
        stateofitem ={stateofitem }
        cartItem={cartItem}
      />
      {displayModal && (
        <CartModal
          products={products}
          cartItem={cartItem}
          setdisplaymodal={setdisplaymodal}
          setcartItem={setcartItem}
        />
      )}
    </>
  );
}

export default App;
