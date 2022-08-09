import styled, { css } from "styled-components"

export type CheckoutAddressInputSize = 'extraSmall' | 'small' | 'big';

interface AddressInputProps {
  addressInputSize: CheckoutAddressInputSize;
}

const InputSizeVariants = {
  extraSmall: "3.75rem",
  small: "12.5rem",
  big: "100%",
}

export const CheckoutFormInput = styled.input<AddressInputProps>`
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
    return css`width: ${InputSizeVariants[props.addressInputSize]}`
  }}
`