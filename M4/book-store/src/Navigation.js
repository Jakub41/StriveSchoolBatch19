import React from "react";
import { GiBookshelf } from "react-icons/gi";

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
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/home">
                <GiBookshelf />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav mr-auto">
                        <NavItem path="/home" name="Home" />
                        <NavItem path="/About" name="About" />
                        <NavItem path="/Contact" name="Contact" />
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navigation;
