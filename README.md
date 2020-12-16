<h1 align="center">
  <a href="https://movie-app-fe361.web.app/">
    Films with Friends - a social movie rating app
  </a>
</h1>
Films with Friends is an app for rating and talking about movies that lets members post twitter-style hot takes on movies, share said reviews with friends for comments and discussion, and maintain lists of movies seen and movies yet-to-watch

<div style="margin-top: 5px; margin-bottom: 15px;">
  <img src="public/moviegif.gif"/>
</div>
Demo Login: demo@gmail.com | Password: Demo2020
<hr/>


## how to set up on your local machine
- $ git clone this repo
- $ cd into new folder created
- run $ npm install
- ask devs for the .env file with API keys, etc
- create and populate .env file in root folder
- run $ npm start
- to begin, login in with email or Google


## mvp features
- allow user login
- allow user log-out
- allow user to search for a movie
- allow user to post movie review
- allow user to post movie rating
- allow user to comment on another's review
- allow user to create a profile
- allow user to add movie to watch-list
- allow user to add movie to already-watched list
- allow user to comment
- allow CRUD of movies, at least on backend
- user view profile page
- working db integration with Firebase


## further goals
- allow users to friend other users
- refactor in React Native and React Native Web
- switch API to GraphQL
- metrics?
- recommend movies to users based on past ratings
- advanced features utilizing "friends" lists
- monetize!


## user stories
- user logs on, sees themed splash page
- user makes account or signs in with google
- user greeted with Activity Feed of reviews
- user comments on reviews, maybe
- (for production) user prompted to add their friends?
- user searches for a movie
- user rates / reviews a movie
- user adds other movies to their to-watch list
- user views / modifies their profile
- user logs oout



## Models and Properties
1. Users
    - displayName(username)
    - photoURL(profile picture)
    - watched(list)
    - ratings
    - watchlist
    - friendlist
2. Posts
    - comments
3. Ratings
    - movies


## Technologies included & to include
- React
- Firebase
- Bootstrap
- React-Router-DOM
- React Hooks
- Axios
- Sass
- Moment.js
- Styled Components
- Toastify
- React-icons
- React-rating-stars
- React-pro-sidebar
- React-avatar
- GraphQL (pending)
- Apollo
- React Native (pending)
- React Native Web (pending)


## wireframes
- https://www.figma.com/file/PpaAeGlhBMedshMbBAuJ37/Untitled?node-id=0%3A1

## ERDs
- see ERDs document [TBC]

## Future Plans
- Add graphQL with Firebase?
- Refactor into React-Native
