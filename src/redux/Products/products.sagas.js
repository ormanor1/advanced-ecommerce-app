import { auth } from '../../firebase/utils';
import { takeLatest, put, all, call } from 'redux-saga/effects';
import productTypes from './products.types';
import {
  handleAddProduct,
  handleFetchProducts,
  handleDeleteProduct,
} from './products.helpers';

import {
  setProducts,
  fetchProductsStart,
  deleteProductStart,
} from './products.actions';

export function* addProduct({
  payload: {
    productCategory,
    productName,
    productThumbnail,
    productPrice,
  },
}) {
  try {
    const timestamp = new Date();
    yield handleAddProduct({
      productCategory,
      productName,
      productThumbnail,
      productPrice,
      productAdminUserUID: auth.currentUser.uid,
      createdDate: timestamp,
    });
    yield put(fetchProductsStart());
  } catch (error) {}
}

export function* onAddProductStart() {
  yield takeLatest(productTypes.ADD_NEW_PRODUCT_START, addProduct);
}
export function* fetchProducts({ payload: { filterType } }) {
  try {
    const products = yield handleFetchProducts(filterType);
    yield put(setProducts(products));
  } catch (error) {
    // console.log(error);
  }
}

export function* onFetchProductsStart() {
  yield takeLatest(productTypes.FETCH_PRODUCT_START, fetchProducts);
}

export function* deleteProduct({ payload }) {
  try {
    yield handleDeleteProduct(payload);
    yield put(fetchProductsStart());
  } catch (error) {
    // console.log(error);
  }
}

export function* onDeleteProduct() {
  yield takeLatest(productTypes.DELETE_PRODUCT_START, deleteProduct);
}

export default function* productsSagas() {
  yield all([
    call(onAddProductStart),
    call(onFetchProductsStart),
    call(onDeleteProduct),
  ]);
}
