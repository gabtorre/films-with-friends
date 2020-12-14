import React, { Component } from "react";
import { ActivityPostsWrapper } from "../StyledComponents";
import Posts from "./Post/Posts";

export default class Main extends Component {

  render() {
    return (
      <ActivityPostsWrapper>
        <div style={{padding: "5%"}}>
            <Posts findProfile={this.props.findProfile} />
        </div>
      </ActivityPostsWrapper>
    );
  }
}
