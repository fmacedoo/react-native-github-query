# Loadsmart Mobile Test
A mobile app to query a GitHub user information.

[![Test](https://github.com/fmacedoo/loadsmart-mobile-test/actions/workflows/node.js.yml/badge.svg)](https://github.com/fmacedoo/loadsmart-mobile-test/actions/workflows/node.js.yml)
​
## Libs
- React Native
- Octokit
- Graphql
- Styled-Components
- Jest
- React-Native-Testing-Library
​
## Setting up

- Create GitHub Personal Access Token. [Click here](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) to see how to create one.
  - Make sure you select the following scopes: `read:org,read:repo_hook,read:user`.
- Create a `.env` file at the root directory as below:
  - ```GITHUB_PERSONAL_TOKEN=<YOUR_PERSONAL_TOKEN_HERE>```

## Run

Go to the project root folder and head to  **src/Presentation.Api**  subfolder and run:
At the root folder, run:

### iOS
> yarn ios

### Android
⚠️ `Check Possible Improvements section about android!`
> yarn android

This will start the metro process, and the simulator by default.
​
## Using the application​
​
On the main screen, type into the only one field at the screen a GitHub username of your choice, and press the Search button. Check the below video out:

[![Watch the video](https://img.youtube.com/vi/u_NQ3efPmGA/maxresdefault.jpg)](https://youtu.be/u_NQ3efPmGA)

## Testing

To test, run:

> yarn test

## Linters

To run linters (eslint & stylelint), run:

> yarn lint

## Git hooks

Git commits will trigger a git hook that run jest, eslint and stylelint. To avoid validation, add `--no-verify` to your commit command.

## Possible improvements
### Application
- As an active user (the user who adds the personal token access), it's possible to see the private repositories. Must be better to omit them.
- A not trimmed username string on the search screen, may cause a user not found error.

### Tests
- Typography deserves more tests for each variant it delivers.
- Styled-components styles have being tested on a `try hard` method. Jest-styled-components lib are presenting bugs on its use with the project.
- `ANDROID` wasn't tested. I've tried to do my best here, but the time was gone.

## Pull Requests / Project progress

Check the [Closed PRs](https://github.com/fmacedoo/loadsmart-mobile-test/pulls?q=is%3Apr+is%3Aclosed) to have an idea on how the project was built.
