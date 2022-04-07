import React from 'react';
import Button from '../../forms/Button';
const Product = (product) => {
  const { productThumbnail, productName, productPrice, pos } = product;
  const configAddToCardBtn = {
    type: 'button',
  };
  return (
    <div className='product'>
      <div className='thumb'>
        <img src={productThumbnail} alt={productName} />
      </div>
      <div className='details'>
        <ul>
          <li>
            <span className='name'>{productName}</span>
          </li>
          <li>
            <span className='price'>{productPrice}$</span>
          </li>
          <li>
            <div className='addToCart'>
              <Button {...configAddToCardBtn}>Add to cart</Button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Product;
