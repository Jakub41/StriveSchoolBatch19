import React from "react";
import { GiBookshelf } from "react-icons/gi";
import { Navbar, Nav } from "react-bootstrap";

const NavItem = props => {
    const pageURI = window.location.pathname + window.location.search;
    const liClassName = props.path === pageURI ? "nav-item active" : "nav-item";
    const aClassName = props.disabled ? "nav-link disabled" : "nav-link";
    return (
        <li className={liClassName}>
            <a href={props.path} className={aClassName}>
                {props.name}
                {props.path === pageURI ? (
                    <span className="sr-only">(current)</span>
                ) : (
                    ""
                )}
            </a>
        </li>
    );
};

class Navigation extends React.Component {
    render() {
        return (
            <Navbar sticky="top" bg="dark" expand="lg" variant="dark">
                <Navbar.Brand href="/home">
                    <GiBookshelf />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavItem path="/home" name="Home" />
                        <NavItem path="/About" name="About" />
                        <NavItem path="/Contact" name="Contact" />
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Navigation;
