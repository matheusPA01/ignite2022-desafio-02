import { Minus, Plus, ShoppingCartSimple } from "phosphor-react";
import { CoffeeType } from "../../assets/coffees/coffee";
import {
  CardContainer, CoffeeBuy, CoffeeBuyActions, CoffeeCategory,
  CoffeeCategoryContainer,
  CoffeeCounter, CoffeeDescription, CoffeeName, CoffeePrice
} from "./styles";


interface CoffeeProps {
  coffee: CoffeeType
}

export function CoffeeCard({ coffee }: CoffeeProps) {
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
            <span>
              <Minus />
            </span>
            <p>1</p>
            <span>
              <Plus />
            </span>
          </CoffeeCounter>

          <button>
            <ShoppingCartSimple weight={"fill"} size={22} />
          </button>
        </CoffeeBuyActions>
      </CoffeeBuy>
    </CardContainer>
  )
}