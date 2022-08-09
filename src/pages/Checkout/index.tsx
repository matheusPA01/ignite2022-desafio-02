import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { CartItems } from "../../components/CartItems";
import { CheckoutInput } from "../../components/CheckoutInput";
import {
  CheckoutContainer, CheckoutForm, CheckoutFormAddress, CheckoutFormGroup,
  CheckoutFormPayment, CheckoutFormAddressTitle, CheckoutSelectedCoffees,
  CheckoutFormPaymentTitle, CheckoutCartContainer, CheckoutCartSummary, CheckoutCartButton
} from "./styles";


export function Checkout() {
  return (
    <CheckoutContainer>
      <form>
        <div>
          <CheckoutForm>
            <h3>Complete seu pedido</h3>

            <CheckoutFormAddress>
              <CheckoutFormAddressTitle>
                <MapPinLine size={22} />
                <div>
                  <h3>Endereço de Entrega</h3>
                  <p>Informe o endereço onde deseja receber seu pedido</p>
                </div>
              </CheckoutFormAddressTitle>

              <CheckoutInput
                placeholder="CEP"
                inputType="text"
                inputSize="small"
              />
              <CheckoutInput
                placeholder="Rua"
                inputType="text"
                inputSize="big"
              />

              <CheckoutFormGroup>
                <CheckoutInput
                  placeholder="Número"
                  inputType="text"
                  inputSize="small"
                />
                <CheckoutInput
                  placeholder="Complemento"
                  inputType="text"
                  inputSize="big"
                />
              </CheckoutFormGroup>

              <CheckoutFormGroup>
                <CheckoutInput
                  placeholder="Bairro"
                  inputType="text"
                  inputSize="small"
                />
                <CheckoutInput
                  placeholder="Cidade"
                  inputType="text"
                  inputSize="big"
                />
                <CheckoutInput
                  placeholder="UF"
                  inputType="text"
                  inputSize="extraSmall"
                />
              </CheckoutFormGroup>

            </CheckoutFormAddress>

            <CheckoutFormPayment>
              <CheckoutFormPaymentTitle>
                <CurrencyDollar size={22} />
                <div>
                  <h3>Pagamento</h3>
                  <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                </div>
              </CheckoutFormPaymentTitle>

              <div>
                <button>
                  <span><CreditCard size={16} /></span>
                  Cartão de Crédito
                </button>

                <button>
                  <span><Bank size={16} /></span>
                  Cartão de Débito
                </button>

                <button>
                  <span><Money size={16} /></span>
                  Dinheiro
                </button>
              </div>

            </CheckoutFormPayment>
          </CheckoutForm>

          <CheckoutSelectedCoffees>
            <h3>Cafés Selecionados</h3>

            <CheckoutCartContainer>
              <CartItems />
              <CartItems />

              <CheckoutCartSummary>
                <div>
                  <p>Total de itens</p>
                  <p>R$ 29.70</p>
                </div>

                <div>
                  <p>Entrega</p>
                  <p>R$ 3.50</p>
                </div>

                <div>
                  <strong>Total</strong>
                  <strong>R$ 33.20</strong>
                </div>

                <CheckoutCartButton>
                  Confirmar pedido
                </CheckoutCartButton>

              </CheckoutCartSummary>
            </CheckoutCartContainer>
          </CheckoutSelectedCoffees>
        </div>
      </form>
    </CheckoutContainer>
  )
}