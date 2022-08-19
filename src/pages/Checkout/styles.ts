import styled from "styled-components";

export const CheckoutContainer = styled.section`
  padding: 2rem 10rem;
  max-width: 90rem;
  margin: 0 auto;

  div {
    display: flex;
  }
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
  border-radius: 6px;
  
  border: none;
  background: ${(props) => props.theme["yellow-300"]};
  color: ${(props) => props.theme.white};

  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;

  transition: background 0.25s;
  
  &:hover {
    background: ${(props) => props.theme["yellow-500"]};
  }
`