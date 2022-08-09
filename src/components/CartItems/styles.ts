import styled from "styled-components";

export const CartItemContainer = styled.div`
  display: flex;
  flex-direction: column;

  hr {
    color: ${(props) => props.theme["base-button"]};
    opacity: 0.2;
    margin: 1.5rem 0;
  }
`

export const CartItem = styled.div`
  padding: 0.25rem 0.5rem;
  display: flex;
  gap: 1.25rem;

  p {
    color: ${(props) => props.theme["base-subtitle"]};
  }

  img {
    width: 4rem;
    height: 4rem;
  }

  span {
    font-weight: 700;
  }

  &+div {
    border-top: 1px solid black;
    margin-top: 1rem;
  }
`

export const CartItemInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const CartItemAction = styled.div`
  margin-top: 0.5rem;
  gap: 0.5rem;

  p {
    display: flex;
    align-items: center;
  }
`

export const CartInfoCounter = styled.div`
  display: flex;
  gap: 0.25rem;

  border-radius: 6px;

  padding: 0.5rem;
  background: ${(props) => props.theme["base-button"]};
`

const CartBaseButton = styled.button`
  border: none;
  border-radius: 6px;
  cursor: pointer;

  padding: 0.25rem;
  border-radius: 6px;
  display: flex;
  align-items: center;

  background: ${(props) => props.theme["base-button"]};
  color: ${(props) => props.theme["purple-500"]};
`

export const CartInfoCounterButton = styled(CartBaseButton)``

export const CartInfoRemoveButton = styled(CartBaseButton)`
  padding: 0.5rem;

  transition: background 0.25sec;

  p {
    color: ${(props) => props.theme["base-text"]};

    text-transform: uppercase;
    font-size: 0.75rem;
    margin-left: 0.25rem;
  }

  &:hover {
    background: ${(props) => props.theme["base-hover"]};
  }
`