import React from 'react';
// reactstrap components
import {
    // Collapse,
    NavbarBrand,
    // Navbar,
    // NavItem,
    // NavLink,
    // Nav,
    Container,
    // Row,
    // Col
} from "reactstrap";

class NavBar extends React.Component {
    state = {}
    render() {
        return (
            <NavBar>
                <Container>
                <NavbarBrand>
                    Fernando Brandao
                </NavbarBrand>
                </Container>
            </NavBar>
        );
    }
}

export default NavBar;