import styled from "styled-components";

export const CheckoutContainer = styled.section`
  padding: 2rem 10rem;
  max-width: 90rem;
  margin: 0 auto;

  div {
    display: flex;
  }
`

export const CheckoutForm = styled.div`
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

  button {
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
  }
`

export const CheckoutFormPaymentTitle = styled(CheckoutFormTitleBase)`
  color: ${(props) => props.theme["purple-500"]};
  margin-bottom: 2rem;
`

export const CheckoutSelectedCoffees = styled.div`
  margin-left: 2rem;

  display: flex;
  flex-direction: column;
`

export const CheckoutCartContainer = styled.div`
  width: 28rem;
  background: ${(props) => props.theme["base-card"]};
  border-radius: 6px 44px;
  
  padding: 2.5rem;
  margin-top: 1rem;

  display: flex;
  flex-direction: column;
`

export const CheckoutCartSummary = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    justify-content: space-between;

    p {
      font-size: 0.875rem;
    }

    strong {
      font-size: 1.25rem;
      color: ${(props) => props.theme["base-subtitle"]};
    }

    &+div {
      margin-top: 0.75rem;
    }
  }
`

export const CheckoutCartButton = styled.button`
  margin-top: 1.5rem;
  padding: 0.75rem 0.5rem;
  
  border: none;
  background: ${(props) => props.theme["yellow-300"]};
  color: ${(props) => props.theme.white};

  font-size: 0.875rem;
  text-transform: uppercase;
  cursor: pointer;

  transition: background 0.25s;
  
  &:hover {
    background: ${(props) => props.theme["yellow-500"]};
  }
`