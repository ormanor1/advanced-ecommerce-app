import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import './styles.scss';

import { signOutUserStart } from '../../redux/User/user.actions';
import { totalInCart } from '../../redux/Cart/cart.helpers';
import Logo from './../../assets/logo.png';

const mapState = ({ user, cartData }) => ({
  currentUser: user.currentUser,
  cartItems: cartData.cartItems,
});

const Header = (props) => {
  const { currentUser, cartItems } = useSelector(mapState);
  const dispatch = useDispatch();
  console.log(cartItems);

  const signOut = () => {
    dispatch(signOutUserStart());
  };

  return (
    <header className='header'>
      <div className='wrap'>
        <div className='logo'>
          <Link to='/'>
            <img src={Logo} alt='SimpleTut LOGO' />
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link to='/'>home</Link>
            </li>
            <li>
              <Link to='/search'>search</Link>
            </li>
          </ul>
        </nav>
        <div className='callToActions'>
          <ul>
            <li key={'cart'}>
              <Link to='/cart'>{`Your cart (${totalInCart(
                cartItems,
              )})`}</Link>
            </li>

            {currentUser
              ? [
                  <li key={'dashboard'}>
                    <Link to='/dashboard'>My Account</Link>
                  </li>,
                  <li key={'signout'}>
                    <span onClick={() => signOut()}>LogOut</span>
                  </li>,
                ]
              : [
                  <li key={'registration'}>
                    <Link to='/registration'>Register</Link>
                  </li>,
                  <li key={'login'}>
                    <Link to='/login'>Login</Link>
                  </li>,
                ]}
          </ul>
        </div>
      </div>
    </header>
  );
};

Header.defaultProps = {
  currentUser: null,
};

export default Header;
