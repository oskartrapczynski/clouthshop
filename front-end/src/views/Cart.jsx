import { CartProductList, CartSummary, FlexContainer } from '@components';
import { CartContext } from '@contexts';
import { useContext } from 'react';

const Cart = () => {
  const [cartItems] = useContext(CartContext);

  return (
    <FlexContainer>
      <CartProductList products={cartItems} />
      <CartSummary products={cartItems} />
    </FlexContainer>
  );
};

export default Cart;
