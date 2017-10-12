# Retrogusto

[![Build Status][travis-image]][travis-url] [![codecov][codecov-image]][codecov-url] [![Dependency Status][dependency-ci-image]][dependency-ci-url]

## Our Stack

* [Angular](https://angular.io/)
* [Node.js](https://nodejs.org)
* [MongoDB](https://www.mongodb.com/)

**Tools we use**

* [Angular Material](https://material.angular.io/)
* [ngrx](https://github.com/ngrx)
* [Passport](http://passportjs.org/)

## Pre Requirements

1. [NodeJS](https://nodejs.org)
1. [MongoDB](https://www.mongodb.com)

## Installation

**Client**
1. `cd client`.
2. Run `npm install` in order to install all the dependencies.
3. Run `npm start` to run the app in the browser.
* If the browser doesn't run automatically open it at [http://localhost:4200](http://localhost:4200).
**Server**
1. `cd server`.
2. Run `npm install` in order to install the dependencies.
3. Run `mongod` to start MongoDB.
4. Run `npm start` to run the app, browse to [http://localhost:3000](http://localhost:3000).
## Tests

**Client**
Run `npm test`. note: if testing the DB mongod must run in the background.

**Server**
Run `npm test`.
To lint test run `npm run lint`.

## Deploy

**Client**

**Server**

[travis-image]: https://travis-ci.org/DavidBronfen/Retrogusto.svg?branch=master
[travis-url]: https://travis-ci.org/DavidBronfen/Retrogusto
[codecov-image]: https://codecov.io/gh/DavidBronfen/Retrogusto/branch/master/graph/badge.svg
[codecov-url]: https://codecov.io/gh/DavidBronfen/Retrogusto
[dependency-ci-image]: https://dependencyci.com/github/DavidBronfen/Retrogusto/badge
[dependency-ci-url]: https://dependencyci.com/github/DavidBronfen/Retrogusto
