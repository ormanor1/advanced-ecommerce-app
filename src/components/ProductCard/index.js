import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchProductStart,
  setProduct,
} from '../../redux/Products/products.actions';

import { addToCart } from '../../redux//Cart/cart.actions';

import Button from '../forms/Button';

import './styles.scss';

const mapState = ({ productsData }) => ({
  product: productsData.product,
});

const ProductCard = () => {
  const dispatch = useDispatch();
  const { product } = useSelector(mapState);

  const { productID } = useParams();

  const { productName, productThumbnail, productPrice } = product;

  useEffect(() => {
    dispatch(fetchProductStart(productID));

    return () => {
      dispatch(setProduct({}));
    };
  }, []);

  const handleAddToCart = (product) => {
    if (!product) return;
    dispatch(addToCart(product));
  };
  const configAddtoCartBtn = {
    type: 'button',
  };

  return (
    <div className='productCard'>
      <div className='hero'>
        <img src={productThumbnail} />
      </div>
      <div className='productDetails'>
        <ul>
          <li>
            <h1>{productName}</h1>
          </li>
          <li>
            <span>$ {productPrice}</span>
          </li>
          <li>
            <div className='addToCart'>
              <Button
                onClick={() => handleAddToCart(product)}
                {...configAddtoCartBtn}>
                Add to cart
              </Button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductCard;
