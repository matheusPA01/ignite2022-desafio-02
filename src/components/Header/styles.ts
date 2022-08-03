import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 2rem 10rem;
  
  display: flex;
  justify-content: space-between;

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
  color: ${(props) => props.theme["yellow-500"]};
  cursor: pointer;
`