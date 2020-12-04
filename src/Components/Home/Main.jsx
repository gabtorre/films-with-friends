import axios from 'axios';
import React, { Component } from 'react'
import Searchbar from './Searchbar/Searchbar'
import Results from './Searchbar/Results'
import PostList from './Posts'
import Card from 'react-bootstrap/Card'
import {CardWrapper} from '../StyledComponents'

export default class Main extends Component {
    state = {
        query: '',
        submitted: false,
        result: null,
        autofill: null,
    }

    handleInput = (e) => {
        console.log(e.target.value)
        this.setState({
            query: e.target.value,
            searched: false,
        }
        // , () => this.search()
        )
    }

    handleSubmit = (e) => {
        e.preventDefault();
        axios(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API}&language=en-US&query=${this.state.query}&page=1&include_adult=false`)
        .then(result =>
            {
                this.setState({
                    submitted: true,
                    result: result.data.results
                })
            }
        ).catch(error => { console.error(error); return Promise.reject(error); });
    }


    render() {
        return (
          <>
            <Card style={{ width: '100%', marginBottom: '5%'}} id="admin-card">
                <CardWrapper>
                        <Searchbar
                        query={this.state.query}
                        handleInput={this.handleInput}
                        handleSubmit={this.handleSubmit}/>
                </CardWrapper>
            </Card>

            { this.state.submitted ? <Results data={this.state.result} /> : null}

            <Card style={{ width: '100%', marginBottom: '5%'}} id="admin-card">
              <CardWrapper>
                    <h1>Friends Activity</h1>
              </CardWrapper>
            </Card>

            <PostList />
          </>
        )
    }
}
