This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

Although I couldn't get his repo to work locally, I was able to adopt Dai Shi's approach of
having one context for the state and one for the dispatch:

https://medium.com/front-end-weekly/react-hooks-tutorial-for-pure-usereducer-usecontext-for-global-state-like-redux-and-comparison-dd3da5053624

With this commit, I can kind of get a dispatched action from the task component to result in a task being moved from one list to another.\n Changed status enum to assign strings to the members of the enum. 

Need to make the status drop down actually show the state it's in.
Need to have things move from inProgress to notStarted the first time an option is selected.

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
