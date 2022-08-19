import {
  CheckoutFormAddress, CheckoutFormAddressTitle, CheckoutFormContainer, CheckoutFormGroup,
  CheckoutFormPayment, CheckoutFormPaymentTitle, CheckoutInput, PaymentMethodButton
} from "./styles";

import { useFormContext } from "react-hook-form";
import { useCheckoutFormContext } from "../../../../context/FormContext";
import { useState } from "react";

import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";

type PaymentMethod = 'credit' | 'debit' | 'money'

export function CheckoutForm() {
  const { register } = useFormContext()
  const { paymentMethod } = useCheckoutFormContext()

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<PaymentMethod>('credit')

  function togglePaymentMethod(method: PaymentMethod) {
    setSelectedPaymentMethod(method)
    paymentMethod(method)
  }

  return (
    <CheckoutFormContainer>
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
          id="cep"
          placeholder="CEP"
          type="text"
          variant="small"
          {...register('cep', { required: true, maxLength: 9 })}
        />

        <CheckoutInput
          id="rua"
          placeholder="Rua"
          type="text"
          variant="big"
          {...register('rua', { required: true, maxLength: 80 })}
        />

        <CheckoutFormGroup>
          <CheckoutInput
            id="numero"
            placeholder="Número"
            type="number"
            variant="small"
            {...register('numero', { required: true, maxLength: 5 })}
          />
          <CheckoutInput
            id="complemento"
            placeholder="Complemento"
            type="text"
            variant="big"
            {...register('complemento', { maxLength: 80 })}
          />
        </CheckoutFormGroup>

        <CheckoutFormGroup>
          <CheckoutInput
            id="bairro"
            placeholder="Bairro"
            type="text"
            variant="small"
            {...register('bairro', { required: true, maxLength: 80 })}
          />
          <CheckoutInput
            id="cidade"
            placeholder="Cidade"
            type="text"
            variant="big"
            {...register('cidade', { required: true, maxLength: 40 })}
          />
          <CheckoutInput
            id="uf"
            placeholder="UF"
            type="text"
            variant="extraSmall"
            {...register('uf', { required: true, maxLength: 2 })}
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
          <PaymentMethodButton id="credit" value="Cartão de Crédito" type="button" onClick={() => togglePaymentMethod('credit')}
            active={selectedPaymentMethod === 'credit' ? true : false}>
            <span><CreditCard size={16} /></span>
            Cartão de Crédito
          </PaymentMethodButton>

          <PaymentMethodButton id="debit" value="Cartão de Débito" type="button" onClick={() => togglePaymentMethod('debit')}
            active={selectedPaymentMethod === 'debit' ? true : false}>
            <span><Bank size={16} /></span>
            Cartão de Débito
          </PaymentMethodButton>

          <PaymentMethodButton id="money" value="Dinheiro" type="button" onClick={() => togglePaymentMethod('money')}
            active={selectedPaymentMethod === 'money' ? true : false}>
            <span><Money size={16} /></span>
            Dinheiro
          </PaymentMethodButton>
        </div>

      </CheckoutFormPayment>
    </CheckoutFormContainer>
  )
}