import React from 'react'
import {Form} from 'react-bootstrap'
import { FaSearch } from "react-icons/fa";
import '../Post/Post.css'

class Search extends React.Component {

    render() {
        return (
                <Form onSubmit={this.props.handleSubmit}>
                    <button className="post__comment-button" type="submit"><FaSearch/></button>
                    <input
                    type='text'
                    placeholder='Movie Lookup'
                    className="comment-input"
                    style={{backgroundColor: "#181D2F", borderStyle:"none", borderRadius: "10px 0 0 0"}}
                    value={this.props.query}
                    onInput={this.props.handleInput}
                    name ="query"/>
                </Form>

        )
    }
}
export default Search;
