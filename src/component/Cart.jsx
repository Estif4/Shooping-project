import React from 'react';

const Product = ({ product}) => {
  return (
    
      <div className='bg-slate-500  rounded-lg p-4'>
      <img className='h-96 w-96 object-cover rounded-lg' src={product.imageURL}/>
     <div><h3 className='text-teal-400 text-xl'>{product.name}</h3>
      <p className='text-white'>${product.price}</p>
      <p className='text-gray-300 p-4'>{product.description}</p>
      <div className='flex justify-end '><p className='bg-orange-300 rounded-md font-serif text-center w-32' >Add to Cart</p></div>
      </div> </div>
   
  );
};

export default Product;
