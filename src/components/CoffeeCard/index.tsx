import { Minus, Plus, ShoppingCartSimple } from "phosphor-react";
import { CoffeeType } from "../../assets/coffees/coffee";
import { useCartContext } from "../../context/CartContext";
import {
  CardContainer, CoffeeAddToCart, CoffeeBuy, CoffeeBuyActions, CoffeeCategory,
  CoffeeCategoryContainer,
  CoffeeCounter, CoffeeDescription, CoffeeName, CoffeePrice
} from "./styles";


interface CoffeeProps {
  coffee: CoffeeType
}

export function CoffeeCard({ coffee }: CoffeeProps) {
  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeItemCart } = useCartContext()

  const quantity = getItemQuantity(coffee.id)

  return (
    <CardContainer>
      <img src={coffee.image} />

      <CoffeeCategoryContainer>
        {coffee.categories.map(categories => {
          return (
            <CoffeeCategory key={categories.length}>
              {categories}
            </CoffeeCategory>
          )
        })}
      </CoffeeCategoryContainer>

      <CoffeeName>
        {coffee.name}
      </CoffeeName>

      <CoffeeDescription>
        {coffee.description}
      </CoffeeDescription>

      <CoffeeBuy>
        <CoffeePrice>
          <span>R$</span> <p>{coffee.price.toFixed(2)}</p>
        </CoffeePrice>


        <CoffeeBuyActions>
          <CoffeeCounter>
            <button onClick={() => decreaseCartQuantity(coffee.id)}>
              <Minus />
            </button>
            <p>{quantity}</p>
            <button onClick={() => increaseCartQuantity(coffee.id)}>
              <Plus />
            </button>
          </CoffeeCounter>

          <CoffeeAddToCart onClick={() => increaseCartQuantity(coffee.id)}>
            <ShoppingCartSimple weight={"fill"} size={22} />
          </CoffeeAddToCart>
        </CoffeeBuyActions>
      </CoffeeBuy>
    </CardContainer>
  )
}