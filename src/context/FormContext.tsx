import { createContext, ReactNode, useContext, useState } from "react";

const OrderFormContext = createContext({} as CheckoutFormContextType)

interface FormContextProps {
  children: ReactNode
}

type PaymentMethod = 'credit' | 'debit' | 'money'

interface Order {
  cep: string
  rua: string
  numero: number
  complemento?: string
  bairro: string
  cidade: string
  uf: string
  payment: string
}

interface CheckoutFormContextType {
  createNewOrder: (data: any) => void
  paymentMethod: (method: PaymentMethod) => void
  newOrderDelivery: Order
}

export function useCheckoutFormContext() {
  return useContext(OrderFormContext)
}

export function CheckoutFormContext({ children }: FormContextProps) {

  const [payment, setPayment] = useState('')
  const [newOrderDelivery, setNewOrderDelivery] = useState({} as Order)

  function paymentMethod(method: PaymentMethod) {
    const paymentMethodVariant = {
      credit: 'Cartão de Crédito',
      debit: 'Cartão de Débito',
      money: 'Dinheiro',
    }

    setPayment(paymentMethodVariant[method])
  }

  function createNewOrder(data: any) {
    const newOrder: Order = {
      cep: data.cep,
      rua: data.rua,
      numero: data.numero,
      complemento: data.complemento,
      bairro: data.bairro,
      cidade: data.cidade,
      uf: data.uf,
      payment: payment,
    }

    setNewOrderDelivery(newOrder)
    paymentMethod('credit')
  }

  return (
    <OrderFormContext.Provider
      value={{
        createNewOrder,
        paymentMethod,
        newOrderDelivery
      }}
    >
      {children}
    </OrderFormContext.Provider>
  )
}