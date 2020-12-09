import axios from "axios";
import React, { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
import Suggestion from "./Searchbar/Suggestion";
import SidebarSuggestion from "./Searchbar/SidebarSuggestion";
import { CardWrapper } from "../StyledComponents";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { FaHeart, FaSearch, FaBars, FaHome } from "react-icons/fa";
const viewHeight = window.outerHeight;

export default class ProfileBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      submitted: false,
      selected: false,
      result: null,
      suggestions: null,
      navStatus: true,
    };
    this.navClose = this.navClose.bind(this);
    this.navOpen = this.navOpen.bind(this);
  }

  navClose(e) {
    e.stopPropagation();
    this.setState({
      navStatus: true,
    });
  }

  navOpen() {
    this.setState({
      navStatus: false,
    });
  }

  handleInput = (e) => {
    console.log(e.target.value);
    this.setState(
      {
        query: e.target.value,
        searched: false,
      }
      // , () => this.search()
    );
  };

  handleResult = (e) => {
    console.log("hi");
    this.setState({
      selected: true,
      result: "",
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    axios(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API}&language=en-US&query=${this.state.query}&page=1&include_adult=false`
    )
      .then((result) => {
        this.setState({
          submitted: true,
          suggestions: result.data.results,
        });
      })
      .catch((error) => {
        console.error(error);
        return Promise.reject(error);
      });
  };

  render() {
    return (
      <div style={{ height: "viewHeight", backgroundColor: "#0F121D" }}>
        <ProSidebar rtl="true" collapsed={this.state.navStatus}>
          <div style={{ height: "viewHeight", backgroundColor: "#0F121D" }}>
            {this.state.navStatus ? (
              <Menu>
                <MenuItem icon={<FaSearch />} onClick={this.navOpen}>
                  {" "}
                </MenuItem>
              </Menu>
            ) : (
              <Menu>
                <MenuItem
                  icon={<FaSearch />}
                  onClick={this.navClose}
                ></MenuItem>
                <MenuItem>
                  <Searchbar
                    query={this.state.query}
                    handleInput={this.handleInput}
                    handleSubmit={this.handleSubmit}
                  />
                  {this.state.submitted ? (
                    <SidebarSuggestion
                      data={this.state.suggestions}
                      selected={this.state.selected}
                      handleResult={this.handleResult}
                    />
                  ) : null}
                </MenuItem>
              </Menu>
            )}
          </div>
        </ProSidebar>
      </div>
    );
  }
}
