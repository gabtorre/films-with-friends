import React, { Component } from "react";
import { ActivityPostsWrapper } from "../StyledComponents";
import Posts from "./Post/Posts";

export default class Main extends Component {

  render() {
    return (
      <ActivityPostsWrapper className="scrollable-div">
        <div style={{width: '50%', minWidth: '600px' , marginLeft: 'auto', marginRight: 'auto'}} >
            <Posts findProfile={this.props.findProfile} />
        </div>
      </ActivityPostsWrapper>
    );
  }
}
