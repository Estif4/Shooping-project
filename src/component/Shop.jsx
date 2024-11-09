import React from 'react';
import Product from './Product';

const Shop = ({products,selectCartItem,removeCartItem,Toglecart,cartItem, setStateOfItem,stateofitem}) => {
  
  

  return (
    <div className='flex justify-center flex-col items-center '>
      <div className='font-mono text-white text-2xl mb-4'>Elegant clothes for everyone</div>
       <div className=' grid grid-cols-2 sm:grid-cols-3 gap-4 w-96 sm:w-[1000px]'>
      {products.map((product) => (
        <Product key={product.id} product={product}  Toglecart={Toglecart}  
        selectCartItem={selectCartItem} removeCartItem={removeCartItem}  setStateOfItem={setStateOfItem}
        stateofitem={ stateofitem} cartItem={cartItem} />
      ))}
    </div>
    </div>
   
  );
};

export default Shop;
