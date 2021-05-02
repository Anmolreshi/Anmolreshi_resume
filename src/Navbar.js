import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

const links = [
  { href: "#work", text: "Work" },
  { href: "#about", text: "About" },
  { href: "#skills", text: "Skills" },
  { href: "#Projectwork", text: "Project" },
  { href: "#Connect", text: "Connect" }
];

const createNavItem = ({ href, text, className }) => (
  <NavItem>
    <NavLink href={href} className={className}>
      {text}
    </NavLink>
  </NavItem>
);

export default class Navbars extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };

    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar fixed="top" className="navbarbackground" dark expand="md">
          <NavbarBrand
            style={{ fontWeight: "bold", fontSize: "35px" }}
            href="#top"
          >
            Anmol Reshi
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse className="navitems1" isOpen={this.state.isOpen} navbar>
            <Nav
              style={{ fontWeight: "bold", fontSize: "22px" }}
              className="ml-auto "
              navbar
            >
              {links.map(createNavItem)}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
