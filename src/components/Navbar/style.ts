import styled from "styled-components";
export const NavbarContainer = styled.nav`
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: center;

  max-width: 1200px;
  width: 100%;
`;

export const NavBarItems = styled.ul`
  max-width: 1200px;
  width: 100%;

  display: flex;
  list-style: none;
  font-family: "Poppins", sans-serif;
`;

export const NavBarItem = styled.li`
  padding-left: 50px;
  font-size: 12px;
  font-weight: 600;
  color: #9f9f9f;
`;
