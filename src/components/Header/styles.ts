import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 2rem 10rem;
  max-width: 90rem;
  margin: 0 auto;
  
  display: flex;
  justify-content: space-between;

  img {
    display: flex;
  }

  div {
    display: flex;
  }
`

const HeaderActions = styled.div`
  padding: 0.5rem;
  border-radius: 6px;

  display: flex;
  align-items: center;
`

export const CurrentLocation = styled(HeaderActions)`
  margin-right: 0.75rem;

  background: ${(props) => props.theme["purple-100"]};
  color: ${(props) => props.theme["purple-300"]};
  

  span {
    margin-left: 0.25rem;
    color: ${(props) => props.theme["purple-500"]};
  }
`

export const HeaderCart = styled(HeaderActions)`
  background: ${(props) => props.theme["yellow-100"]};
  position: relative;

  a {
    display: flex;
    color: ${(props) => props.theme["yellow-500"]};
  }
`

export const HeaderCartCounter = styled.div`
  background: ${(props) => props.theme["yellow-500"]};
  color: ${(props) => props.theme.white};

  width: 1.25rem;
  height: 1.25rem;

  border-radius: 50%;
  font-size: 0.75rem;
  font-weight: 700;
    
  position: absolute;
  right: 0;
  top: 0;

  transform: translate(25%, -25%);

  display: flex;
  justify-content: center;
  align-items: center;

  span {
    margin-top: 0.1rem; // align number counter to center
  }
`