import React, { Component } from "react";
import "./App.css";
import Navigation from "./Navigation";
import FooterComponent from "./FooterComponent";
import BookComponent from "./BookComponent";
import WelcomeComponent from "./WelcomeComponent";

class App extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <div className="container-fluid">
                    <WelcomeComponent />
                </div>
                <div className="container">
                    <h1>Book Store</h1>
                    <BookComponent />
                </div>
                <FooterComponent />
            </div>
        );
    }
}

export default App;
