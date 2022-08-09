import styled from "styled-components";

export const CardContainer = styled.div`
  margin-top: 3.375rem;
  padding: 1rem;

  width: 16rem;
  height: 19.375rem;

  background: ${(props) => props.theme["base-card"]};
  border-radius: 6px 36px;

  display: flex;
  flex-direction: column;

  img {
    margin-top: -2.25rem;
  }
`

export const CoffeeCategoryContainer = styled.div`
  display: flex;
  gap: 0.25rem;
`

export const CoffeeCategory = styled.span`
  background: ${(props) => props.theme["yellow-100"]};
  border-radius: 36px;
  padding: 0.25rem 0.5rem;

  color: ${(props) => props.theme["yellow-500"]};
  text-transform: uppercase;
  font-size: 0.625rem;
  font-weight: 700;
`

export const CoffeeName = styled.h3`
  font-size: 1.25rem;
  color: ${(props) => props.theme["base-subtitle"]};
  font-family: 'Baloo 2', cursive;
`

export const CoffeeDescription = styled.p`
  font-size: 0.875rem;
  color: ${(props) => props.theme["base-label"]};
  text-align: center;
`

export const CoffeeBuy = styled.div`
  display: flex;
  gap: 1.25rem;
`

export const CoffeePrice = styled.div`
  span {
    font-size: 0.875rem;
    margin-right: 0.25rem;
  }

  p {
    color: ${(props) => props.theme["base-text"]};
    font-family: 'Baloo 2', cursive;
    font-weight: 700;
    font-size: 1.5rem;
  }
`

export const CoffeeBuyActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  button {
    background: ${(props) => props.theme["purple-500"]};
    color: ${(props) => props.theme.white};

    border: none;
    padding: 0.5rem;
    border-radius: 6px;

    display: flex;
    cursor: pointer;

    transition: background 0.25s;

    &:hover {
      background: ${(props) => props.theme["purple-300"]};
    }
  }
`

export const CoffeeCounter = styled.div`
  background: ${(props) => props.theme["base-button"]};
  padding: 0.5rem;
  border-radius: 6px;
  display: flex;
  gap: 0.25rem;

  span {
    color: ${(props) => props.theme["purple-500"]};
    cursor: pointer;
    display: flex;
  }

  p {
    color: ${(props) => props.theme["base-title"]};
  }
`