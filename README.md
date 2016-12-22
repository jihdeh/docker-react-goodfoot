At the time of your choosing I will add you as a contributor to a private Github repository. It will contain a description of project deliverables, brief formal specifications, and integration tests I will use to verify the results. You will have four hours to complete the project and commit the result to the repository.

In addition to the tests, I'll review speed of implementation, coding style, and look and feel, in no particular order.

You may use any code or libraries suitable for commercial use, including boilerplate.


You will have four hours to implement a web application packaged in a Docker image that serves a static website and a single API endpoint.

The web application should be implemented using Node.js and Koa.

The API endpoint is defined here: 

```bash
git clone GIT_URL
EXPORT KEY=$()
EXPORT HASH=$()
curl -XPOST http://localhost:8080/api/v1/check-signature -d "key=$KEY&hash=$HASH" 
curl -XPOST http://localhost:8080/api/v1/check-signature -d "key=$KEY&hash=INCORRECT_HASH"
```

* A Koa based web application that serves a static website and the API endpoint defined here: 
* The website should be implemented using React, and contain components that allow the user to input two strings and submit them to the API endpoint. It should display success or failure messages to the user.
* A Dockerfile that when launched, serv

You may use a