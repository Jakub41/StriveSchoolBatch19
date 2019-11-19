import React, { Component } from "react";
import { Table, Button } from "react-bootstrap";

export default class BookComponent extends Component {
    state = {
        books: []
    };

    componentDidMount() {
        fetch("../API/fantasy.json")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({
                    books: data
                });
            });
    }

    render() {
        let books = this.state.books.map(book => {
            return (
                <tr key={book.asin}>
                    <td>{book.asin}</td>
                    <td>{book.title}</td>
                    <td>{book.category}</td>
                    <td>{book.price}</td>
                    <td>
                        <img src="{book.img}" alt="{book.title}" height="90" width="90" />>
                    </td>
                    <td>
                        <Button variant="success" size="sm" className="mr-2">
                            Edit
                        </Button>
                        <Button variant="danger" size="sm">
                            Delete
                        </Button>
                    </td>
                </tr>
            );
        });
        return (
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {books}
                </tbody>
            </Table>
        );
    }
}
