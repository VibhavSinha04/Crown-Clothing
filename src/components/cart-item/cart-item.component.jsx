import { CartItemContainer, Name, Details, Img } from "./cart-item.styles";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <Img src={imageUrl} alt={`${name}`} />
      <Details>
        <Name>{name}</Name>
        <span className="price">
          {quantity} x ₹{price}
        </span>
      </Details>
    </CartItemContainer>
  );
};

export default CartItem;
