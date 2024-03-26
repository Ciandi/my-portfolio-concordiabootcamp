import React, { useState } from "react";
import {
  ContainerNav,
  Nav,
  Logo,
  NavLinks,
  NavLinkItem,
  CustomNavLink,
  MenuIcon,
} from "./styles";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ContainerNav>
      <Nav>
        <Logo>
          <a href="/">Xd.dev</a>
        </Logo>

        <MenuIcon onClick={toggleNav}>
          <span></span>
          <span></span>
          <span></span>
        </MenuIcon>

        <NavLinks isOpen={isOpen}>
          <NavLinkItem>
            <CustomNavLink to="/" onClick={toggleNav}>
              Home
            </CustomNavLink>
          </NavLinkItem>
          <NavLinkItem>
            <CustomNavLink to="/experience" onClick={toggleNav}>
              Experience
            </CustomNavLink>
          </NavLinkItem>
          <NavLinkItem>
            <CustomNavLink to="/projects" onClick={toggleNav}>
              Projects
            </CustomNavLink>
          </NavLinkItem>
          <NavLinkItem>
            <CustomNavLink to="/contact" onClick={toggleNav}>
              Contact
            </CustomNavLink>
          </NavLinkItem>
        </NavLinks>
      </Nav>
    </ContainerNav>
  );
};

export default NavBar;
