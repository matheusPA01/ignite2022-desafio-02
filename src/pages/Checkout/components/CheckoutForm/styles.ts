import styled, { css } from "styled-components"

export const CheckoutFormContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const CheckoutFormAddress = styled.div`
  width: 40rem;
  padding: 2.5rem;
  background: ${(props) => props.theme["base-card"]};
  
  margin-top: 1rem;
  border-radius: 6px;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const CheckoutFormGroup = styled.div`
  gap: 1rem;
`

const CheckoutFormTitleBase = styled.div`
  div {
    display: flex;
    flex-direction: column;
    margin-left: 0.5rem;
  }

  h3 {
    color: ${(props) => props.theme["base-subtitle"]};
  }

  p {
    color: ${(props) => props.theme["base-text"]};
    font-size: 0.875rem;
  }
`

export const CheckoutFormAddressTitle = styled(CheckoutFormTitleBase)`
  color: ${(props) => props.theme["yellow-500"]};
`

export const CheckoutFormPayment = styled.div`
  width: 40rem;
  padding: 2.5rem;
  background: ${(props) => props.theme["base-card"]};

  margin-top: 1rem;
  border-radius: 6px;

  display: flex;
  flex-direction: column;
`
// Payment Button Style

interface ButtonPaymentMethodProps {
  active: boolean
}

export const PaymentMethodButton = styled.button<ButtonPaymentMethodProps>`
  border: none;
  background: ${(props) => props.theme["base-button"]};
  padding: 1rem;
  border-radius: 6px;
  width: 33%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  font-size: 0.75rem;
  cursor: pointer;

  transition: background 0.25s;

  &+button {
    margin-left: 0.75rem;
  }

  span {
    color: ${(props) => props.theme["purple-500"]};
    display: flex;
  }

  &:hover {
    background: ${(props) => props.theme["base-hover"]};
  }

  ${props => {
    return css`
      background: ${props.active === true ? props.theme["purple-100"] : ''};
      border: ${props.active === true ? '1px solid' : ''};
      border-color: ${props.active === true ? props.theme["purple-500"] : ''};
    `
  }} 
`

export const CheckoutFormPaymentTitle = styled(CheckoutFormTitleBase)`
  color: ${(props) => props.theme["purple-500"]};
  margin-bottom: 2rem;
`

// Checkout input Style
type CheckoutAddressInputSize = 'extraSmall' | 'small' | 'big';

interface AddressInputProps {
  variant: CheckoutAddressInputSize;
}

const InputSizeVariants = {
  extraSmall: "3.75rem",
  small: "12.5rem",
  big: "100%",
}

export const CheckoutInput = styled.input<AddressInputProps>`
  border-radius: 4px;
  padding: 0.75rem;
  background: ${(props) => props.theme["base-input"]};
  border: 1px solid ${(props) => props.theme["base-button"]};
  outline: transparent;

  &::placeholder {
    color: ${(props) => props.theme["base-label"]};
    font-size: 0.875rem;
  }

  &:focus {
    border-color: ${(props) => props.theme["yellow-500"]};
  }

  ${props => {
    return css`width: ${InputSizeVariants[props.variant]}`
  }}
`