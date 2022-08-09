import {
  CartInfoCounter, CartInfoCounterButton, CartInfoRemoveButton,
  CartItem,
  CartItemAction, CartItemContainer, CartItemInfo
} from "./styles";

import tradicional from '../../assets/coffees/tradicional.png'
import { Minus, Plus, Trash } from "phosphor-react";

export function CartItems() {
  return (
    <CartItemContainer>
      <CartItem>
        <img src={tradicional} />

        <CartItemInfo>
          <p>Expresso Tradicional</p>

          <CartItemAction>
            <CartInfoCounter>
              <CartInfoCounterButton>
                <Minus />
              </CartInfoCounterButton>
              <p>1</p>
              <CartInfoCounterButton>
                <Plus />
              </CartInfoCounterButton>
            </CartInfoCounter>

            <CartInfoRemoveButton>
              <Trash size={16} />
              <p>Remover</p>
            </CartInfoRemoveButton>
          </CartItemAction>

        </CartItemInfo>

        <span>R$ 9,90</span>
      </CartItem>

      <hr />
    </CartItemContainer>
  )
}