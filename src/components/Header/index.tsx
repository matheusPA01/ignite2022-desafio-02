import { CurrentLocation, HeaderCart, HeaderCartCounter, HeaderContainer } from "./styles";

import headerLogo from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

export function Header() {

  const { cartItemsQuantity } = useCartContext()

  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src={headerLogo} />
      </NavLink>

      <div>
        <CurrentLocation>
          <MapPin size={22} weight={"fill"} /> <span>Porto Alegre, RS</span>
        </CurrentLocation>

        <HeaderCart>
          <NavLink to="/checkout" title="Carrinho">
            <ShoppingCart size={22} weight={"fill"} />
          </NavLink>
          <HeaderCartCounter>
            <span>{cartItemsQuantity}</span>
          </HeaderCartCounter>
        </HeaderCart>
      </div>
    </HeaderContainer>
  )
}