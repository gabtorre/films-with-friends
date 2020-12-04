import React from 'react'
import {Form, Row, Col, Button} from 'react-bootstrap'

class Search extends React.Component {

    render() {
        return (
            <Form onSubmit={this.props.handleSubmit}>
                <Form.Row>
                    <Col xs={9}>
                    <Form.Control
                    type='text'
                    placeholder='Movie Lookup'
                    value={this.props.query}
                    onInput={this.props.handleInput}
                    name ="query"/>
                    </Col>
                    <Col xs={1}>
                    <Button type='submit'  variant="danger">Search</Button>
                    </Col>
                </Form.Row>
            </Form>
        )
    }
}
export default Search;
