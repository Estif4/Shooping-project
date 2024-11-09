import React, { useState, useEffect } from 'react';

const CartModal = ({ cartItem, setdisplaymodal, setcartItem }) => {
  const [newprice, setnewprice] = useState(0);

  useEffect(() => {
    const total = cartItem.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setnewprice(total);  
  }, [cartItem]);

  const addQuantity = (id) => {
   
    const updatedCart = cartItem.map((item) => {
      if (item.id === id) {
      
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;  
    });
    setcartItem(updatedCart); 
     
  };
  const subsctractQuantity = (id) => {
   
    const updatedCart = cartItem.map((item) => {
      if (item.id === id) {
      if(item.quantity!==0){
        return { ...item, quantity: item.quantity-1 };}
      }
      return item;  
    });

    setcartItem(updatedCart);  
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-70">
      <div className="bg-orange-300 p-4 rounded-md opacity-100 w-96 h-72 overflow-auto">
        <div className="text-xl text-gray-600 m-4 font-semibold font-serif">Your Cart</div>
       {cartItem.length===0?(<div>No items In the cart</div>):''}
        {cartItem.map((item, index) => (
          <div key={index} className="flex justify-between items-center bg-orange-200 p-2 mb-2 rounded">
            <div className="text-gray-900">{item.name}</div>
            <div>
              <button 
              onClick={()=>{subsctractQuantity(item.id)}}
              className='text-xl text-red-600'>-</button>
              <button type="button" className="px-2 mx-2 py-1 bg-gray-300 rounded">
                {item.quantity}
              </button>
              <button 
                onClick={() => addQuantity(item.id)} 
                className='text-xl text-green-600'>+</button>
            </div>
          </div>
        ))}
        <div>Cart Total: ${newprice}</div>
        <button onClick={() => setdisplaymodal(false)} className='p-2 bg-black text-white'>Checkout</button>
      </div>
    </div>
  );
};

export default CartModal;
