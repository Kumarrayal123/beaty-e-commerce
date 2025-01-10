// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';  // Import Link from react-router-dom
// import { ShopContext } from '../context/ShopContext';

// const ProductItem = ({ id, image, name, price }) => {
//   const { currency } = useContext(ShopContext);

//   return (
//     <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
//       <div className='overflow-hidden'>
//         <img className='hover:scale-110 transition ease-in-out' src={image} alt={name} />
//       </div>
//       <p className='pt-3 pb-1 text-sm'>{name}</p>
//       <p className='text-sm font-medium'>{currency}{price}</p>
//     </Link>
//   );
// };

// export default ProductItem;

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
      <div className='overflow-hidden'>
        <img className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105" src={image} alt={name} />
      </div>
      
      
      <p className='pt-3 pb-1 text-sm'>{name}</p>
      <p className='text-sm font-medium'>{currency}{price}</p>
      
    </Link>
    
  );
};

export default ProductItem;
