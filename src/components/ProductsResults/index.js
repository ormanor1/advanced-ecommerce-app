import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchProductsStart } from '../../redux/Products/products.actions';
import FormSelect from '../forms/FormSelect';
import Product from './Product';

import './styles.scss';

const mapState = ({ productsData }) => ({
  products: productsData.products,
});

const ProductResults = ({}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { filterType } = useParams();
  const { products } = useSelector(mapState);

  useEffect(() => {
    dispatch(fetchProductsStart({ filterType }));
  }, [filterType]);

  const handleFilter = (e) => {
    const nextFilter = e.target.value;
    navigate(`/search/${nextFilter}`);
  };

  if (!Array.isArray(products)) return null;
  if (products.length < 1) {
    return (
      <div className='products'>
        <p>No search results.</p>
      </div>
    );
  }
  const configFilters = {
    defaultValue: filterType,
    options: [
      {
        name: 'Show all',
        value: '',
      },
      {
        name: 'Mens',
        value: 'mens',
      },
      {
        name: 'Womens',
        value: 'womens',
      },
    ],
    handleChange: handleFilter,
  };
  return (
    <div className='products'>
      <h1>Browse Products</h1>
      <FormSelect {...configFilters} />

      <div className='productsResults'>
        {products.map((product, pos) => {
          const { productThumbnail, productName, productPrice } = product;

          if (
            !productThumbnail ||
            !productName ||
            typeof productPrice === 'undefined'
          )
            return null;

          const configProduct = {
            productThumbnail,
            productName,
            productPrice,
            pos,
          };
          return <Product {...configProduct} />;
        })}
      </div>
    </div>
  );
};

export default ProductResults;
