import styled from "styled-components";

export const NavRoot = styled.nav`
  color: white;
  background-color: darkslategray;
  padding: 20px;
  margin-bottom: 50px;
`;

export const Headline = styled.h1`
  text-align: center;
  color: white;
  text-decoration: none;
  text-decoration-color: transparent;
  font-size: 48px;
  text-transform: uppercase;
`;

export const NavOptions = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const NavButton = styled.button`
  color: white;
  background-color: transparent;
  padding: 15px 30px;
  font-size: 32px;
  border: none;
  outline: none;

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;
