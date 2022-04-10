import React from 'react';
import { useDispatch } from 'react-redux';
import {
  removeCartItem,
  addToCart,
  reduceCartItem,
} from '../../../redux/Cart/cart.actions';

const Item = (product) => {
  const dispatch = useDispatch();

  const {
    productName,
    productThumbnail,
    productPrice,
    quantity,
    documentID,
  } = product;

  const handleRemoveCartItem = (documentID) => {
    dispatch(removeCartItem({ documentID }));
  };

  const handleAddItem = (product) => {
    dispatch(addToCart(product));
  };

  const handleReduceCartItem = (product) => {
    dispatch(reduceCartItem(product));
  };

  return (
    <table className='cartItem' border='0' cellSpacing='0' cellPadding='0'>
      <tbody>
        <tr>
          <td>
            <img src={productThumbnail} alt={productName} />
          </td>
          <td>{productName}</td>
          <td>
            <span
              onClick={() => {
                handleReduceCartItem(product);
              }}
              className='cartBtn'>{`< `}</span>
            <span>{quantity}</span>
            <span
              onClick={() => {
                handleAddItem(product);
              }}
              className='cartBtn'>{` >`}</span>
          </td>
          <td>{productPrice} $</td>
          <td>
            <span
              className='cartBtn'
              onClick={() => {
                handleRemoveCartItem(documentID);
              }}>
              X
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Item;
