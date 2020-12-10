import axios from "axios";
import React, { Component } from "react";
import {SearchBar, UserSearchBar} from "./Searchbar/Searchbar";
import {Suggestion, UserSuggestion} from "./Searchbar/SidebarSuggestion";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { FaSearch } from "react-icons/fa";
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

export default class ProfileBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      userQuery: "",
      submitted: false,
      selected: false,
      result: null,
      suggestions: null,
      navStatus: true,
      userSuggestions: null
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

  search = () =>{
    if(this.state.query){
        axios(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API}&language=en-US&query=${this.state.query}&page=1&include_adult=false`)
        .then(result =>
            {
                this.setState({
                  suggestions: result.data.results
                })
            }
        ).catch(error => { console.error(error); return Promise.reject(error); });
    }
}

  handleInput = (e) => {
    this.setState(
      {
        query: e.target.value,
        searched: true,
      }
      , () => this.search()
    );
  };

  userSearch = () =>{
    if(this.state.userQuery){
      const docs = []
      firebase.firestore().collection('users').where("displayName", "==", this.state.userQuery)
      .get()
      .then(snaps => {
        snaps.forEach(function(doc) {
          let pid = doc.id
          let pdata = doc.data()
          docs.push({data: pdata, uid: pid});
        })
          this.setState({userSuggestions: docs})
      })
      .catch(function(error) {
          console.log("Error getting documents: ", error);
      });
    }
}

  handleUserSearchInput = (e) => {
    this.setState(
      {
        userQuery: e.target.value,
        searched: true,
      }
      , () => this.userSearch()
    );
  };

  handleResult = (e) => {
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
                  <SearchBar
                    query={this.state.query}
                    handleInput={this.handleInput}
                    handleUserSearchInput={this.handleUserSearchInput}
                    handleSubmit={this.handleSubmit}
                  />
                    {this.state.userSuggestions ? (
                      <UserSuggestion
                        data={this.state.userSuggestions}
                        selected={this.state.selected}
                        handleResult={this.handleResult}
                      />
                    ) : null}
                  {this.state.suggestions ? (
                    <Suggestion
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
