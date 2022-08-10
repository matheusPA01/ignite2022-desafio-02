import {
  CartInfoCounter, CartInfoCounterButton, CartInfoRemoveButton,
  CartItem,
  CartItemAction, CartItemContainer, CartItemInfo
} from "./styles";

import { coffees } from "../../assets/coffees/coffee";
import { Minus, Plus, Trash } from "phosphor-react";
import { useCartContext } from "../../context/CartContext";

interface CartItemProps {
  id: string
  quantity: number
}

export function CartItems({ id, quantity }: CartItemProps) {
  const { removeItemCart, increaseCartQuantity, decreaseCartQuantity } = useCartContext()

  const coffee = coffees.find(coffee => coffee.id === id)
  if (coffee == null) return null

  const decreaseItemCartQuantity = () => decreaseCartQuantity(coffee.id)
  const increaseItemCartQuantity = () => increaseCartQuantity(coffee.id)
  const removeItemFromCart = () => removeItemCart(coffee.id)

  return (
    <CartItemContainer>
      <CartItem>
        <img src={coffee.image} />

        <CartItemInfo>
          <p>{coffee.name}</p>

          <CartItemAction>
            <CartInfoCounter>
              <CartInfoCounterButton type="button" onClick={decreaseItemCartQuantity}>
                <Minus />
              </CartInfoCounterButton>
              <p>{quantity}</p>
              <CartInfoCounterButton type="button" onClick={increaseItemCartQuantity}>
                <Plus />
              </CartInfoCounterButton>
            </CartInfoCounter>

            <CartInfoRemoveButton type="button" onClick={removeItemFromCart}>
              <Trash size={16} />
              <p>Remover</p>
            </CartInfoRemoveButton>
          </CartItemAction>

        </CartItemInfo>

        <span>R$ {coffee.price.toFixed(2)}</span>
      </CartItem>

      <hr />
    </CartItemContainer>
  )
}