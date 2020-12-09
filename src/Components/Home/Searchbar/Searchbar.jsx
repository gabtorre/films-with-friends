import React from 'react'
import {Form, Row, Col, FormControl} from 'react-bootstrap'
import { FaSearch } from "react-icons/fa";

class Search extends React.Component {

    render() {
        return (
                <Form onSubmit={this.props.handleSubmit}>
                    <Form.Control
                    type='text'
                    placeholder='Movie Lookup'
                    style={{backgroundColor: "#181D2F", borderStyle:"none"}}
                    value={this.props.query}
                    onInput={this.props.handleInput}
                    name ="query"/>
                </Form>

        )
    }
}
export default Search;
