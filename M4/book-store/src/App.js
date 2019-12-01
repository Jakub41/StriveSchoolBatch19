import React, { Component } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import FooterComponent from "./components/FooterComponent";
import BookComponent from "./components/BookComponent";
import WelcomeComponent from "./components/WelcomeComponent";

class App extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <div>
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
