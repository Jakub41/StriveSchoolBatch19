import React, { Component } from "react";
import { Jumbotron, Button } from "react-bootstrap";

export default class WelcomeComponent extends Component {
    render() {
        return (
            <Jumbotron>
                <h1>Welcome Book Reader</h1>
                <p>
                    Find yhe best books you like
                </p>
                <p>
                    <Button variant="primary">Learn more</Button>
                </p>
            </Jumbotron>
        );
    }
}
