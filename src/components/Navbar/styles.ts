import { Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  box-shadow: 0 1px 3px -2px black;
`;

export const NavLogo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
`;

export const NavLogoText = styled.p`
  color: #171717;
  font-size: 30px;
  font-weight: bold;
  text-decoration: none;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  gap: 50px;
  color: #626262;
  font-size: 20px;
  font-weight: 500;
`;

export const NavItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3px;
  cursor: pointer;
`;

export const NavCart = styled.div`
  display: flex;
  align-items: center;
  gap: 45px;
`;

export const NavbarCartCount = styled.div`
  width: 22px;
  height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -35px;
  margin-left: -55px;
  border-radius: 11px;
  font-size: 14px;
  background: red;
  color: white;
`;
