import React, { Component } from "react";
import { Table, Button } from "react-bootstrap";
import data from "./data/fantasy.json";
import { MdDeleteForever, MdModeEdit } from "react-icons/md";

export default class BookComponent extends Component {
    render() {
        let books = data.map(book => {
            return (
                <tr key={book.asin}>
                    <td>{book.asin}</td>
                    <td>{book.title}</td>
                    <td>{book.category}</td>
                    <td>{book.price}</td>
                    <td>
                        <img
                            src={book.img}
                            alt={book.title}
                            height="90"
                            width="90"
                        />
                    </td>
                    <td>
                        <Button variant="warning" size="sm" className="mr-2">
                            <MdModeEdit />
                        </Button>
                        <Button variant="danger" size="sm">
                            <MdDeleteForever />
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
                <tbody>{books}</tbody>
            </Table>
        );
    }
}
