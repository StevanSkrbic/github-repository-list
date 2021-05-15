# Github repository list

This is a demo project. It is a simple GITHUB repository table list (with all the features that MUI Datatables gives us built-in) 
and that can change the UI theme and have pagination based on Load more UX pattern.

## Hosting URL
[Github Repo App](https://my-project-1500543348700.web.app)

## Requirements

Add a `.env.local` with this value:
`.env.local` is used for variables that developer uses while developing in local with `npm start`.
Only on running `npm start` those varibles are reinitialized.

```
REACT_APP_GITHUB_TOKEN=<GITHUB_TOKEN>
```

- [authenticating-with-graphql](https://docs.github.com/en/graphql/guides/forming-calls-with-graphql#authenticating-with-graphql)
Where ```<GITHUB_TOKEN>``` should be generated following the steps in ["Creating a personal access token"](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token)
to create a token on Github.
The scopes we require for the type of data we are trying to request are in the Repository scopes. 
But, in order to be sure to match all the behavior of the GraphQL Explorer, request the following scopes:

```
user
public_repo
repo
repo_deployment
repo:status
read:repo_hook
read:org
read:public_key
read:gpg_key
```

## Non-specific environmetal variables

Non-specific environmental variables are stored in `.env` file.

```
SKIP_PREFLIGHT_CHECK=true
```

## Technologies

This project uses:

- React.
- Typescript.
- Jest.
- Storybook.
- MaterialUI
    - MUI Datatables
- StyledComponents.
- ESLint
- Prettier
- Cypress
- Apollo client
- Apollo toolkit
- Release-it

## Linting and formatting

- ESLint
- Prettier
- Husky

### Imports

Imports are ordered in a sensible manner

```
// Third party-libraries

// Project dependencies
```

or even better using a semantic approach for imports

```
// Third party default imports
// Third party explicit imports

// Domain
// Components
// Utility
```

### API calls - GraphQL

- [@apollo/client](https://github.com/FormidableLabs/urql) library used as a GraphQL client
- [graphql](https://github.com/FormidableLabs/urql) library used as a GraphQL client
- [apollo] library used for generating type definitions for graphql schema

### Typescript

- [typescript](https://www.typescriptlang.org/): typed superset of Javascript that compiles to plain Javascript.
- [apollo-tooling](https://github.com/apollographql/apollo-tooling): used for generating static types for improved client-side type safety

### Components visualization - Storybook

- [storybook](https://storybook.js.org/): tool for developing UI components in isolation. It is based on the atomic design principles.

### Atomic Design Principles

The Storybook components are built based on the [atomic design principles](https://bradfrost.com/blog/post/atomic-web-design/). The components are divided into different types (atoms, particles, molecules, etc).
Each component can be visualized and manually tested with Storybook.

### Atomic commits Principles

This projects uses Atomic commits Principles - manually: [atomic commits](https://en.wikipedia.org/wiki/Atomic_commit)

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

### `npm apollo:generate`

Generate static types for GraphQL queries. Can use the published schema in the Apollo registry or a downloaded schema
This script also uses `dotenv-cli` and `cross-var` to read and consume the .env files environment variables and to 
substitute them into our `package.json` scripts across development platforms.

### `npm prettier`
### `prettier:apply`

Launch and apply prettier formatting

### `release`

Manage versioning and publishing.

### `storybook`

Launches the storybook with component visualization web client

### `cypress:start:app`
### `cypress:start:wait`
### `cypress:open`

Starts up the app with intrumentation in place and then opens up the Cypress test runner

### `cypress:run`

Execute Cypress in headless mode for the CI server. Run entire within the terminal (including our web application), 
application boots up, Cypress runs it tests and even does video recording for any test that runs and collecitng 
coverage report.


## Docker

### Development Environment

Run app in the Docker Container:
```
docker run \
    -it \
    --rm \
    -v ${PWD}:/src \
    -v /src/node_modules \
    -p 3001:3000 \
    -e CHOKIDAR_USEPOLLING=true \
    repositories
```

## CI & CD

This project uses Github Actions for Continuous Integration `CI` workflow.

Workflow:
- Runs on Pull Requests to the `main` branch
   - It will test Pull Request 
