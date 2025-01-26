# Express.js Request Body Size Limit Bug

This repository demonstrates a common issue in Express.js applications where large request bodies cause the server to crash. The default body size limit in Express.js is relatively small, and exceeding it results in an error.

## Bug

The `bug.js` file contains an Express.js application that attempts to log the entire request body.  When a large request body is sent to the `/` route, this application will crash because Express.js will reject the request due to exceeding the default body size limit. 

## Solution

The `bugSolution.js` file shows how to resolve this issue by using the `body-parser` middleware to increase the body size limit.  This allows the application to handle larger request bodies without crashing.

## How to reproduce

1. Clone this repository.
2. Navigate to the project directory.
3. Run `npm install express` to install the Express.js dependency.
4. Run `node bug.js` to start the server.
5. Send a large POST request to `http://localhost:3000/`.  You can use tools like Postman or curl for this purpose.  The server will likely crash.
6. To test the solution, replace `bug.js` with `bugSolution.js`, restart the server and send another large POST request.  This time the server will handle the request correctly. 