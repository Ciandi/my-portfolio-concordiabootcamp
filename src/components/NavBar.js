import React from "react";
import {
  ContainerNav,
  Nav,
  Logo,
  NavLinks,
  NavLinkItem,
  CustomNavLink,
} from "./styles";

const NavBar = () => {
  return (
    <ContainerNav>
      <Nav>
        <Logo>
          <a href="/">Xd.dev</a>
        </Logo>

        <NavLinks>
          <Logo>
            <NavLinkItem>
              <CustomNavLink to="/">Home</CustomNavLink>
            </NavLinkItem>
          </Logo>
          <Logo>
            <NavLinkItem>
              <CustomNavLink to="/experience">Experience</CustomNavLink>
            </NavLinkItem>
          </Logo>
          <Logo>
            <NavLinkItem>
              <CustomNavLink to="/projects">Projects</CustomNavLink>
            </NavLinkItem>
          </Logo>
          <Logo>
            <NavLinkItem>
              <CustomNavLink to="/contact">Contact</CustomNavLink>
            </NavLinkItem>
          </Logo>
        </NavLinks>
      </Nav>
    </ContainerNav>
  );
};

export default NavBar;
