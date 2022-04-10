export const existingCartItem = ({ prevCartItems, nextCartItem }) => {
  return prevCartItems.find(
    (cartItem) => cartItem.documentID === nextCartItem.documentID,
  );
};

export const handleAddToCart = ({ prevCartItems, nextCartItem }) => {
  const quantityIncrement = 1;
  const isExist = existingCartItem({ prevCartItems, nextCartItem });

  if (isExist) {
    return prevCartItems.map((cartItem) =>
      cartItem.documentID === nextCartItem.documentID
        ? {
            ...cartItem,
            quantity: cartItem.quantity + quantityIncrement,
          }
        : cartItem,
    );
  }

  return [
    ...prevCartItems,
    {
      ...nextCartItem,
      quantity: quantityIncrement,
    },
  ];
};

export const handleReduceCartItem = ({ prevCartItems, cartItem }) => {
  console.log(prevCartItems, cartItem);

  const existingCartItem = prevCartItems.find(
    (item) => item.documentID === cartItem.documentID,
  );

  if (existingCartItem.quantity === 1) {
    return handleRemoveCartItem({ prevCartItems, cartItem });
  } else
    return prevCartItems.map((item) =>
      item.documentID === cartItem.documentID
        ? {
            ...item,
            quantity: item.quantity - 1,
          }
        : item,
    );
};

export const handleRemoveCartItem = ({ prevCartItems, cartItem }) => {
  return prevCartItems.filter(
    (item) => item.documentID !== cartItem.documentID,
  );
};

export const totalInCart = (cartItems) => {
  const total = cartItems.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);
  return total;
};

export const totalPriceCart = (cartItems) => {
  const total = cartItems.reduce((acc, item) => {
    return acc + item.productPrice * item.quantity;
  }, 0);

  return total;
};
