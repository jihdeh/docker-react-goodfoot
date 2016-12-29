# Docker Tryout - Project Goodfoot

Create a web application packaged in a Docker image that serves a website and a single API endpoint. Commit and push the solution to this repository. You may use any code or libraries suitable for commercial distribution, including boilerplate.

All code and supporting files should be placed in the [src](src) directory. Do not modify other parts of the repository.

The reviewer will execute `npm run docker` to build and run the Docker image then `npm run project-test` to verify technical completion.
___

## API

Path `/api/1.0/verify-signature` compares a MD5 hash of the `key` POST parameter with the `x-key-hash` header.

* Implement using [Koa](http://koajs.com/).
* Formal specification at [swagger.yaml](swagger.yaml). You may want to generate documentation using [editor.swagger.io](http://editor.swagger.io/).
* Tests in [project-tests/core.test.js](project-tests/core.test.js).

## Website

Renders text input fields corresponding to the `key` parameter and `x-key-hash` header, and submits them to the API.

* Implement using [React](https://facebook.github.io/react/)
* Serve files using [Koa](http://koajs.com/) in the same process as the API endpoint.
* Renders:
  * A text input with ID `#key`
  * A text input with ID `#hash`
  * A clickable element with ID `#submit` that submits the values of the `#key` and `#hash` fields as the `key` and `x-key-hash` API endpoint parameters, respectively.
  * An element with ID `#response` that contains the HTTP response code returned from the API call.
* Tests in [project-tests/core.test.js](project-tests/core.test.js).

## Docker image

Files to build a Docker image containing the API endpoint and static website.

* Implement using [Docker](https://docs.docker.com/).
* Should build with `docker build -t goodfoot ./src` from the root of the repository.
* Should run with `docker run -p 8080:8080 goodfoot`.

## Addons

In no particular order:

 * Speed of implementation
 * Logical and readable git commits
 * Code style and elegance
   * Execute `npm run lint` to lint
 * Website look and feel 
 * Use of [Redux](http://redux.js.org/)
 * Recommendations on improving the test project
 * Use of type checking tools like [Flow](https://flowtype.org/)

## Before Starting

* Run `yarn install` this creates a build file, then you can start docker.
 

