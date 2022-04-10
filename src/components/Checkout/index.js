import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../../components/forms/Button';
import './styles.scss';
import { totalPriceCart } from '../../redux/Cart/cart.helpers';
import Item from './Item';

const mapState = ({ cartData }) => ({
  cartItems: cartData.cartItems,
});

const Checkout = () => {
  const { cartItems } = useSelector(mapState);
  console.log(Number(totalPriceCart(cartItems)));

  return (
    <div className='checkout'>
      <h1>Checkout</h1>

      <div className='cart'>
        {cartItems.length > 0 ? (
          <table border='0' cellPadding='0' cellSpacing='0'>
            <tbody>
              <tr>
                <td>
                  <table
                    className='checkoutHeader'
                    border='0'
                    cellPadding='10'
                    cellSpacing='0'>
                    <tbody>
                      <tr>
                        <th>Product</th>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Remove</th>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td>
                  <table border='0' cellSpacing='0' cellPadding='0'>
                    <tbody>
                      {cartItems.map((item, pos) => {
                        return (
                          <tr key={pos}>
                            <td>
                              <Item {...item} />
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td>
                  <table border='0' cellSpacing='0' cellPadding='0'>
                    <tbody>
                      <tr>
                        <td>
                          <table
                            border='0'
                            cellPadding='10'
                            cellSpacing='0'>
                            <tbody>
                              <tr>
                                <td>
                                  <h3>
                                    Total:{totalPriceCart(cartItems)} $
                                  </h3>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <table
                            border='0'
                            cellPadding='10'
                            cellSpacing='0'>
                            <tbody>
                              <tr>
                                <td>
                                  <Link to='/search'>
                                    <Button>Continue Shopping</Button>
                                  </Link>
                                </td>
                                <td>
                                  <Button>Checkout</Button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        ) : (
          <p>Cart is empty</p>
        )}
      </div>
    </div>
  );
};

export default Checkout;
