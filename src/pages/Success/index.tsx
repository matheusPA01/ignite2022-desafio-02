import { SuccessContainer, SuccessIconBackground, SuccessInfo, SuccessInfoContainer } from "./styles";

import deliveryImg from '../../assets/delivery.png'
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";

export function Success() {
  return (
    <SuccessContainer>
      <h2>Uhu! Pedido confirmado</h2>
      <h4>Agora é só aguardar que logo o café chegará até você</h4>

      <SuccessInfoContainer>
        <SuccessInfo>
          <div>
            <SuccessIconBackground variant="purple">
              <MapPin weight={"fill"} />
            </SuccessIconBackground>
            <p>
              Entrega em <strong>Rua João Daniel Martinelli, 102 </strong> <br />
              Farrapos - Porto Alegre, RS
            </p>
          </div>

          <div>
            <SuccessIconBackground variant="yellow">
              <Timer weight={"fill"} />
            </SuccessIconBackground>
            <p>
              Previsão de entrega <br />
              <strong>20 min - 30min </strong>
            </p>
          </div>

          <div>
            <SuccessIconBackground variant="darkYellow">
              <CurrencyDollar weight={"fill"} />
            </SuccessIconBackground>
            <p>
              Pagamento na entrega <br />
              <strong>Cartão de crédito</strong>
            </p>
          </div>
        </SuccessInfo>

        <img src={deliveryImg} />
      </SuccessInfoContainer>
    </SuccessContainer>
  )
}