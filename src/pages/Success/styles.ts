import styled, { css } from "styled-components";

type IconBackgroundColor = 'purple' | 'yellow' | 'darkYellow'

interface IconBackgroundProps {
  variant: IconBackgroundColor
}

const IconBackgroundColorVariant = {
  purple: '#8047F8',
  yellow: '#DBAC2C',
  darkYellow: '#C47F17',
}

export const SuccessContainer = styled.section`
  padding: 2rem 10rem;
  max-width: 90rem;
  margin: 0 auto;

  h2 {
    color: ${(props) => props.theme["yellow-500"]};
    font-size: 2rem;
  }

  h4 {
    color: ${(props) => props.theme["base-subtitle"]};
    font-size: 1.25rem;
    font-weight: 400;
  }
`

export const SuccessInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const SuccessInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border: 1px solid ${(props) => props.theme["purple-500"]};
  border-radius: 6px 36px;

  padding: 2.5rem;
  margin-top: 2.5rem;
  width: 32.875rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
`

export const SuccessIconBackground = styled.span<IconBackgroundProps>`
  padding: 0.5rem;

  color: ${(props) => props.theme.white};
  border-radius: 50%;

  display: flex;

  ${props => {
    return css`background-color: ${IconBackgroundColorVariant[props.variant]}`
  }}
`