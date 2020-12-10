# [movie app] (working name)
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



## models and properties (incomplete--draft)
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





# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
# movie-app-react
