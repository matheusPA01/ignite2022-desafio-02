import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { coffees } from "../../assets/coffees/coffee";
import { CartItems } from "../../components/CartItems";
import { CheckoutInput } from "../../components/CheckoutInput";
import { useCartContext } from "../../context/CartContext";
import {
  CheckoutContainer, CheckoutForm, CheckoutFormAddress, CheckoutFormGroup,
  CheckoutFormPayment, CheckoutFormAddressTitle, CheckoutSelectedCoffees,
  CheckoutFormPaymentTitle, CheckoutCartContainer, CheckoutCartSummary, CheckoutCartButton
} from "./styles";

export function Checkout() {
  const { cartItems } = useCartContext()

  const sumCartTotalItems = cartItems.reduce((total, cartItem) => {
    const coffee = coffees.find(coffee => coffee.id === cartItem.id)
    return total + (coffee?.price || 0) * cartItem.quantity
  }, 0)

  const totalSummaryValue = sumCartTotalItems + 3.5

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
                  inputType="number"
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
                <button type="button">
                  <span><CreditCard size={16} /></span>
                  Cartão de Crédito
                </button>

                <button type="button">
                  <span><Bank size={16} /></span>
                  Cartão de Débito
                </button>

                <button type="button">
                  <span><Money size={16} /></span>
                  Dinheiro
                </button>
              </div>

            </CheckoutFormPayment>
          </CheckoutForm>

          <CheckoutSelectedCoffees>
            <h3>Cafés Selecionados</h3>

            <CheckoutCartContainer>
              {cartItems.map(item => (
                <CartItems key={item.id} {...item} />
              ))}

              <CheckoutCartSummary>
                <div>
                  <p>Total de itens</p>
                  {`R$ ${sumCartTotalItems.toFixed(2)}`}
                </div>

                <div>
                  <p>Entrega</p>
                  <p>R$ 3.50</p>
                </div>

                <div>
                  <strong>Total</strong>
                  <strong>{`R$ ${totalSummaryValue.toFixed(2)}`}</strong>
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