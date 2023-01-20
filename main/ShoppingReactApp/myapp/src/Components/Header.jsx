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
import { Link, Outlet } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { UseGlobaldata } from "./Context";
import './Style.css'

const Header = () => {
  let {state,dispatch}= UseGlobaldata()
  let {cart}=state
  return (
    <>
      <Navbar bg="dark" variant="dark" style={{ height: "70px" }}>
        <Container>
          <NavbarBrand>
            <NavLink > <Link to='/'>E-Shopping </Link></NavLink>
          </NavbarBrand>
          <Navbar.Text style={{ width: "500px" }} className="m-auto">
            <FormControl placeholder="Search" />
          </Navbar.Text>
          <Nav>
            <Dropdown>
              <Dropdown.Toggle>
                <FaShoppingCart />

                <Badge>{cart.length}</Badge>

              </Dropdown.Toggle>
              <Dropdown.Menu  align="end">
                {cart.length>0 ? cart.map((prod)=>{return (
                  <div className="row cart-items m-1" style={{ width: "300px" }}>
                    <img className="col-6"  src={prod.images} alt='cart item'></img> 
                    <div className="col-6">
                     <div className="row">
                        <div className="col-8">
                          <p className="row m-0">{prod.title}</p>
                          <p className="row m-0">{prod.price}</p>
                        </div>
                        <div className="col-4">
                          <button className="btn btn-danger" onClick={()=>dispatch({ type:'remove-from-cart',payload:prod}) }>Delete</button>
                        </div>
                      </div>
                    </div>
                  </div>)}
                ):(
                <p>Cart is Empty</p>)
                }
                <div>
                  <Link to='/cart' className="btn btn-primary"> Go To Cart </Link>
                </div>
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