import React from "react";
import { Form } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import "../Post/Post.css";

export const SearchBar = (props) => {
  return (
    <Form onSubmit={props.handleSubmit}>
      <button className="post__comment-button" type="submit">
        <FaSearch />
      </button>
      <input
        type="text"
        placeholder="Movie Lookup"
        className="comment-input"
        style={{
          backgroundColor: "#181D2F",
          borderStyle: "none",
          borderRadius: "10px 0 0 0",
        }}
        value={props.query}
        onInput={props.handleInput}
        name="query"
      />
    </Form>
  );
};

export const UserSearchBar = (props) => {
  return (
    <Form onSubmit={props.handleSubmit}>
      <button className="post__comment-button" type="submit">
        <FaSearch />
      </button>
      <input
        type="text"
        placeholder="User Lookup"
        className="comment-input"
        style={{
          backgroundColor: "#181D2F",
          borderStyle: "none",
          borderRadius: "10px 0 0 0",
        }}
        value={props.userQuery}
        onInput={props.handleInput}
        name="query"
      />
    </Form>
  );
};
