import {
  CoffeeList, Coffees, CoffeeTags, HomeContainer, HomeIntro, IntroItems, IntroTitle,
  ItemIconBackground, LeftItems, RightItems
} from "./styles";

import homeImg from '../../assets/home.png'
import { Coffee, Package, ShoppingCart, Timer, X } from "phosphor-react";
import { CoffeeCard } from "../../components/CoffeeCard";
import { coffees } from "../../assets/coffees/coffee";
import { useEffect, useState } from "react";

interface CoffeesProps {
  image: string;
  categories: string[];
  name: string;
  description: string;
  price: number;
  id: string;
}

export function Home() {

  const [coffeeList, setCoffeeList] = useState<CoffeesProps[]>([])

  useEffect(() => {
    setCoffeeList(coffees)
  }, [])

  function filterCoffeeByCategory(event: any) {
    let coffeeType = event.target.value

    const filterCoffeeByCategory = coffees.filter(coffee => coffee.categories.some(category => category == coffeeType))

    if (coffeeType != 'all') {
      setCoffeeList(filterCoffeeByCategory)
    } else {
      setCoffeeList(coffees)
    }
  }

  return (
    <HomeContainer>
      <HomeIntro>
        <div>
          <IntroTitle>
            <div>
              <h1>
                Encontre o café perfeito <br />
                para qualquer hora do dia
              </h1>
              <h3>
                Com o Coffee Delivery você recebe seu café onde estiver, a <br />
                qualquer hora
              </h3>
            </div>
          </IntroTitle>

          <IntroItems>
            <LeftItems>
              <div>
                <ItemIconBackground variant={"darkYellow"}>
                  <ShoppingCart weight={"fill"} />
                </ItemIconBackground>
                Compra simples e segura
              </div>

              <div>
                <ItemIconBackground variant={"yellow"}>
                  <Timer weight={"fill"} />
                </ItemIconBackground>
                Entrega rápida e rastreada
              </div>
            </LeftItems>

            <RightItems>
              <div>
                <ItemIconBackground variant={"base"}>
                  <Package weight={"fill"} />
                </ItemIconBackground>
                Embalagem mantém o café intacto
              </div>

              <div>
                <ItemIconBackground variant={"purple"}>
                  <Coffee weight={"fill"} />
                </ItemIconBackground>
                O café chega fresquinho até você
              </div>
            </RightItems>
          </IntroItems>
        </div>

        <img src={homeImg} />
      </HomeIntro>

      <CoffeeList>
        <div>
          <h2>Nossos cafés</h2>

          <CoffeeTags>
            <button value="all" onClick={filterCoffeeByCategory}>
              Todos
            </button>

            <button value="tradicional" onClick={filterCoffeeByCategory}>
              Tradicional
            </button>

            <button value="especial" onClick={filterCoffeeByCategory}>
              Especial
            </button>

            <button value="com leite" onClick={filterCoffeeByCategory}>
              Com leite
            </button>

            <button value="alcoólico" onClick={filterCoffeeByCategory}>
              Alcoólico
            </button>

            <button value="gelado" onClick={filterCoffeeByCategory}>
              Gelado
            </button>
          </CoffeeTags>
        </div>

        <Coffees>
          {coffeeList.map(coffee => {
            return (
              <CoffeeCard
                key={coffee.id}
                coffee={coffee}
              />
            )
          })}
        </Coffees>
      </CoffeeList>
    </HomeContainer>
  )
}