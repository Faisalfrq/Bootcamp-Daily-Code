import React from "react";
import {
  Badge,
  Container,
  Dropdown,
  FormControl,
  Nav,
  Navbar,
  NavbarBrand,
  NavLink,
} 
from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" style={{ height: "70px" }}>
        <Container>
          <NavbarBrand>
            <NavLink> E-Shopping</NavLink>
          </NavbarBrand>
          <Navbar.Text style={{ width: "500px" }} className="m-auto">
            <FormControl placeholder="Search" />
          </Navbar.Text>
          <Nav>
            <Dropdown>
              <Dropdown.Toggle>
                <FaShoppingCart />
                <Badge>9</Badge>
              </Dropdown.Toggle>
              <Dropdown.Menu style={{ width: "300px" }} align="end">
                <p>Cart is Empty</p>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
};

export default Header;