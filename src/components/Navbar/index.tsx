import { Nav, NavCart, NavLogo, NavLogoText, NavbarCartCount } from "./styles";
import logo from "../Assets/logo.svg";
import { useAppSelector } from "../../app/hooks";
import { Link } from "react-router-dom";
import { BsCart } from "react-icons/bs";

export function Navbar() {
  const totalItems = useAppSelector((state) => state.cart.items.length);
  return (
    <Nav>
      <NavLogo to="/">
        <img src={logo} alt="" height={60} />
        <NavLogoText>Pokemon Cards</NavLogoText>
      </NavLogo>
      <NavCart>
        <Link to="/cart">
          <BsCart fontSize={30} color="black" />
        </Link>
        <NavbarCartCount>{totalItems}</NavbarCartCount>
      </NavCart>
    </Nav>
  );
}
