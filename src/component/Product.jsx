import React, { useEffect } from 'react';

const Product = ({ product, selectCartItem, removeCartItem, cartItem }) => {
  
  const isInCart =cartItem.some((item) => item.id === product.id);

  const handleToggleCart = () => {
    if (isInCart) {
      removeCartItem(product.id); 
    } else {
      selectCartItem(product.id); 
    }
  };

 

  return (
    <div className="bg-slate-500 rounded-lg p-4">
      <img className="h-96 w-96 object-cover rounded-lg" src={product.imageURL} alt={product.name} />
      <div>
        <h3 className="text-teal-400 h-16 text-xl">{product.name}</h3>
        <p className="text-white">${product.price}</p>
        <p className="text-gray-300 p-4 h-44 ">{product.description}</p>
        <div className="flex justify-end cursor-pointer">
          <button
            onClick={handleToggleCart}
            className="bg-orange-300 rounded-md font-serif text-center w-32"
          >
            {isInCart ? 'Remove from Cart' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
