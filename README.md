# Image Processing API

## How to use the API

- This API does not have any interface.
- Start the server by running "npm run start". Build it with "npx tsc". Test it with npm run test
- Navigate to the homepage by typing into the URL localhost:3000
- Write your instructions for the image processing in the URL based on the provided syntax (without *: api?filename=*filename*&width=*number*&height=*number\*)
- Available image files are the ones provided by udacity. (encenadaport, fjord, icelandwaterfall, palmtunnel, santamonica)
- Run the API and check the thumb folder which includes the generated image

## Given Instructions

This project aims to give you a real-world scenario in which you would read and write to your disk via a Node.js express server rather than a database. The project you create serves two purposes: to prepare you for setting up scalable code and architecture for real-world projects and tie together some of the most popular middleware and utilities found in Node.js projects. This project barely touches the surface of what is possible but will prove your ability to use what you’ve learned in real-world scenarios.

### Setup and Architecture

Set up a project structure that promotes scalability
- Source code is kept separate from compiled code.
- All tests should be contained in their own folder.
- Separate modules are created for any processing.

Set up an npm project
- Package.json should contain both devDependencies, and dependencies.
- Scripts should be created for testing, linting/prettier, starting the server, and compiling TS.
- Build script should run without error.

### Functionality

Add and use Express to a node.js project
- Start script should run without error
- Provided endpoint should open in the browser with status 200

Follow middleware documentation to use middleware to create an API
- Accessing the provided URL with image information should successfully resize an image and save it to disk on first access, then pull from disk on subsequent access attempts.
- An error message should be provided to the user when an image has failed to process or does not exist.

Write relevant unit tests with Jasmine and SuperTest to improve code quality and refactoring
- Test script runs and all tests created pass.
- There is at least 1 test per endpoint and at least one test for image processing.

Utilize TypeScript to avoid errors and improve maintainability

- All code in the SRC folder should use the .ts filetype.
- Functions should include typed parameters and return types and not use the any type.
- Import and Export used for modules.
- Build script should successfully compile TS to JS.

### Code Quality

Write well-formatted linted code

- Prettier and Lint scripts should run without producing any error messages.
