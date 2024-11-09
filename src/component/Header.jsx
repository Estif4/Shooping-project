import React from 'react';
import icon from '../assets/photos/icon.Webp';
import cartimg from '../assets/photos/shopping-cart.png';

export default function Header({ cartItem , setdisplaymodal, toglecart }) {
  return (
    <div className="flex justify-center">
      <div className="flex justify-between items-center w-96 m-2 sm:m-4 sm:w-[1000px]">
        <div>
          <img src={icon} alt="Luxe Wardrobe Icon" className="rounded-full w-16 h-16 float-left mr-4" />
          <p className="text-white text-2xl sm:text-4xl font-bold font-serif tracking-wider whitespace-nowrap m-4">
            Luxe Wardrobe
          </p>
        </div>
        <div className="fixed top-6 sm:top-10 right-2 sm:right-8 flex flex-row bg-yellow-300 p-2 rounded-md text-black gap-2">
          <img
            className='w-6  animate-bounce' 
            src={cartimg}
            alt="Cart Icon"
          />
          <button
            className="font-semibold font-serif"
            onClick={() => setdisplaymodal(true)}
          >
            {`Cart(${cartItem.length})`}
          </button>
        </div>
      </div>
    </div>
  );
}
