# Firebase Authentication React App
https://fir-authenticationreactapp.web.app/

## What is this?

This is a template repository for creating a React app connected to a Firebase service.

The boilerplate code contains generic (unstyled!) pages for the CRUD operations needed to use the authentication Firebase service.

Caveat; this isn't a production-grade database service. Please don't add any personal credentials when signing up (like your proper email address!). Use dummy data.

## What does it use?

- Production
    - Firebase (the obvious one!)
    - Create-React-App (babel, webpack, etc.)
    - react-router
    - React Hooks
    - React Context API
- Test
    - react-testing-library
    - jest (with CRA)

## Configuration

To set your Firebase credentials, create a `.env` file with the following attributes:
```
/* These are private and not source-controlled */
REACT_APP_API_KEY=<Firebase API Key>
REACT_APP_AUTH_DOMAIN=<Firebase App Domain>
REACT_APP_DATABASE_URL=<Firebase Database URL>
REACT_APP_PROJECT_ID=<Firebase Project ID>
REACT_APP_STORAGE_BUCKET=<Firebase storage buccket>
REACT_APP_MESSAGING_SENDER_ID=<Firebase messaging sender ID>
```
These should all be available on your firebase console


## Coverage Metrics

### Develop Branch
[![Coverage Status](https://coveralls.io/repos/github/byrne-greg/FirebaseAuthenticationReactApp/badge.svg?branch=devlop)](https://coveralls.io/github/byrne-greg/FirebaseAuthenticationReactApp?branch=develop)

### Master Branch
[![Coverage Status](https://coveralls.io/repos/github/byrne-greg/FirebaseAuthenticationReactApp/badge.svg?branch=master)](https://coveralls.io/github/byrne-greg/FirebaseAuthenticationReactApp?branch=master)
