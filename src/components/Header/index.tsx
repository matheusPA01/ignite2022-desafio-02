import { CurrentLocation, HeaderCart, HeaderContainer } from "./styles";

import headerLogo from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from "phosphor-react";

export function Header() {
  return (
    <HeaderContainer>
      <img src={headerLogo} />

      <div>
        <CurrentLocation>
          <MapPin size={22} weight={"fill"} /> <span>Porto Alegre, RS</span>
        </CurrentLocation>

        <HeaderCart>
          <ShoppingCart size={22} weight={"fill"} />
        </HeaderCart>
      </div>
    </HeaderContainer>
  )
}