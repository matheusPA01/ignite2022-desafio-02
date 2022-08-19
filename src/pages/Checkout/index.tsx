import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { coffees } from "../../assets/coffees/coffee";
import { CartItems } from "../../components/CartItems";
import { useCartContext } from "../../context/CartContext";
import { useCheckoutFormContext } from "../../context/FormContext";
import { CheckoutForm } from "./components/CheckoutForm";
import { CheckoutCartContainer, CheckoutCartSummary, CheckoutCartButton, CheckoutContainer, CheckoutSelectedCoffees } from "./styles";

export function Checkout() {
  const { cartItems, resetCart } = useCartContext()
  const { createNewOrder } = useCheckoutFormContext()

  const newOrderForm = useForm()
  const navigate = useNavigate()

  const sumCartTotalItems = cartItems.reduce((total, cartItem) => {
    const coffee = coffees.find(coffee => coffee.id === cartItem.id)
    return total + (coffee?.price || 0) * cartItem.quantity
  }, 0)

  const totalSummaryValue = sumCartTotalItems + 3.5

  const { handleSubmit } = newOrderForm

  function handleCreateNewOrder(data: any) {
    createNewOrder(data)

    setTimeout(() => {
      navigate('/success')
    }, 2000)

    resetCart()
  }

  return (
    <CheckoutContainer>
      <form onSubmit={handleSubmit(handleCreateNewOrder)} action="">
        <div>
          <FormProvider {...newOrderForm}>
            <CheckoutForm />
          </FormProvider>

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

                <CheckoutCartButton type="submit">
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