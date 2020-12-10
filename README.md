# [movie app]
a social movie rating app
- An app for rating and talking about movies that lets members post twitter-style hot takes on movies, share said reviews with friends for comments and discussion, and maintain lists of movies seen and movies yet-to-watch


## alternate app names (brainstorming)
- cine-stream
- film rater
- films with friends
- take two (a pun on "hot takes" vs a filming "take")
- hot takes
- insta-critic
- twitic
- film voire
- movie feed


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



## models and properties
1. User
    - username
    - id
    - credentials
2. Post
    - createdAt
    - movieid
    - photoURL
    - poster
    - rating
    - release
    - synopsis
    - text
    - title
    - uid
    - username
3. Comment
    - content
    - photoURL
    - post id
    - timestamp
4. Rating
    - createdAt
    - date
    - movieid
    - rating
    - title
    - uid
5. Watched
    - createdAt
    - date
    - movieid
    - poster
    - title
    - uid
6. Watchlist
    - createdAt
    - date
    - movieid
    - poster
    - title
    - uid
7. Friend (join table?)
    - (userid 1)
    - (userid 2)


## technologies included / to include
- React
- Firebase
- Bootstrap
- React-Router-DOM
- React Hooks
- Axios
- Sass
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
- see ERDs document

## Feasibility
- does graphQL work with Firebase?
- is Bootstrap compatible with React-Native?
