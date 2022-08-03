import styled, { css } from 'styled-components'

type ItemColor = 'darkYellow' | 'yellow' | 'base' | 'purple';

interface ItemColorProps {
  variant: ItemColor;
}

const ItemColorVariants = {
  darkYellow: '#C47F17',
  yellow: '#DBAC2C',
  base: '#574F4D',
  purple: '#8047F8'
}

export const HomeContainer = styled.main`
  padding: 2rem 10rem;

  margin-top: calc(5.875rem - 4rem);
`

export const HomeIntro = styled.section`
  display: flex;
  justify-content: space-between;

  padding: 2rem 0;

  img {
    max-width: 100%;
  }
`

export const IntroTitle = styled.div`
  display: flex;
  gap: 3.5rem;

  div {
    h1 {
      color: ${(props) => props.theme['base-title']};
      font-size: 3rem;
    }

    h3 {
      color: ${(props) => props.theme['base-subtitle']};
      font-size: 1.25rem;
      font-weight: 400;

      margin-top: 1rem;
    }
  }
`

export const IntroItems = styled.div`
  margin-top: 4.125rem;

  display: flex;
  gap: 2.5rem;
`

const Items = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  div {
    display: flex;
    align-items: center;
  }
`

export const ItemIconBackground = styled.span<ItemColorProps>`
  padding: 0.5rem;
  background: blue;
  border-radius: 50%;

  margin-right: 0.75rem;
  color: ${(props) => props.theme.white};

  display: flex;
  align-items: center;

  ${props => {
    return css`background-color: ${ItemColorVariants[props.variant]}`
  }}
`

export const LeftItems = styled(Items)``

export const RightItems = styled(Items)``

// Coffee List
export const CoffeeList = styled.section`
  margin-top: 2rem;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h2 {
    font-size: 2rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const CoffeeTags = styled.div`
  button {
    background: transparent;
    border: 1px solid ${(props) => props.theme['yellow-300']};
    border-radius: 36px;
    padding: 0.5rem 0.75rem;

    color: ${(props) => props.theme['yellow-500']};
    cursor: pointer;
    font-size: 0.625rem;
    font-weight: 700;
    text-transform: uppercase;

    &+button {
      margin-left: 0.5rem;
    }
  }
`

export const Coffees = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (min-width: 1500px) {
    div {
      &+div {
        margin-right: 0.25rem;
      }
    }
  }
`