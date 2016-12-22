# Goodfoot Programming Test 

Create a web application packaged in a Docker image that serves a website and a single API endpoint.

All code and supporting files should be placed in the [src](src) directory. Do not modify other parts of the repository.

The reviewer will run `npm run docker` to build and run the Docker image then `npm run project-test` to verify technical completion.
___

## API endpoint

Compares a MD5 hash of the `key` POST parameter with the `x-key-hash` header.

* Implement using [Koa](http://koajs.com/).
* Formal specification at [swagger.yaml](swagger.yaml). You may want to generate documentation using [editor.swagger.io](http://editor.swagger.io/).
* Tests in [project-tests/core.test.js](project-tests/core.test.js)

## Static website

Renders text input fields corresponding to the `key` parameter and `x-key-hash` header, and submits them to the API.

* Implement using [React](https://facebook.github.io/react/)
* Should run on port 8080.
* Renders:
  * A text input with ID `#key`
  * A text input with ID `#hash`
  * A clickable element with ID `#submit` that submits the values of the `#key` and `#hash` fields as the `key` and `x-key-hash` API parameters, respectively.
  * An element with ID `#response` that contains the HTTP response code returned from the API call
* Tests in [project-tests/core.test.js](project-tests/core.test.js)

## Docker image

Files to build a Docker image containing the API endpoint and static website.

* Implement using [Docker](https://docs.docker.com/)
* Should build with `docker build -t goodfoot-programming-test ./src` from the root of the repository.
* Should run with `docker run -p 8080:8080 goodfoot-programming-test`

## Bonus points

In no particular order, bonus points will be awarded for:

 * Speed of implementation
 * Code style
 * Website look and feel
 * Use of [Redux](http://redux.js.org/)
 * Recommendations on how to improve the test
