import axios from 'axios';
import React, { Component } from 'react'
import Searchbar from './Searchbar/Searchbar'
import Results from './Searchbar/Results'
import Suggestion from './Searchbar/Suggestion'
import Card from 'react-bootstrap/Card'
import {ActivityCardWrapper} from '../StyledComponents'
import Posts from './Post/Posts'

export default class Main extends Component {
    state = {
        query: '',
        submitted: false,
        selected: false,
        result: null,
        suggestions: null,
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

    handleResult = (e) =>{
        console.log('hi')
        this.setState({
            selected: true,
            result: ""
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        axios(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API}&language=en-US&query=${this.state.query}&page=1&include_adult=false`)
        .then(result =>
            {
                this.setState({
                    submitted: true,
                    suggestions: result.data.results
                })
            }
        ).catch(error => { console.error(error); return Promise.reject(error); });
    }


    render() {
        return (
          <>
            <Card style={{ width: "auto", marginBottom: '5%'}} id="admin-card">
              <ActivityCardWrapper>
                    <h1>Activity Feed</h1>
              </ActivityCardWrapper>
            </Card>
            <Posts />
          </>
        )
    }
}
