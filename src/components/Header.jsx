import { Navbar, Container, Nav } from "react-bootstrap";
import "../assets/styles/header.scss";
import logo from "../assets/images/logo.png";
import { useContext } from "react";
import { CartContext } from "./CartContext";

function Header() {
  const {cartCount} = useContext(CartContext);
  return (
    <header>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={logo}
              alt="Un mexicain avec un chapeau qui joue de la guitare"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">Accueil</Nav.Link>
              <Nav.Item>Panier ({cartCount})</Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
