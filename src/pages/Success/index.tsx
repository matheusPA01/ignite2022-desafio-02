import { SuccessContainer, SuccessIconBackground, SuccessInfo, SuccessInfoContainer } from "./styles";

import deliveryImg from '../../assets/delivery.png'
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { useCheckoutFormContext } from "../../context/FormContext";

export function Success() {
  const { newOrderDelivery } = useCheckoutFormContext()

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
              Entrega em <strong>{newOrderDelivery.rua}, {newOrderDelivery.numero} </strong> <br />
              {newOrderDelivery.bairro} - {newOrderDelivery.cidade}, {newOrderDelivery.uf}
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
              <strong>{newOrderDelivery.payment}</strong>
            </p>
          </div>
        </SuccessInfo>

        <img src={deliveryImg} />
      </SuccessInfoContainer>
    </SuccessContainer>
  )
}