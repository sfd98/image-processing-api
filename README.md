# Image Processing API

## How to use the API

- This API does not have any interface. It does not display the images in the browser.
- Start the server by running "npm run start". Build it with "npx tsc". Test it with npm run test
- Navigate to /api by typing it into the URL
- Write your instructions for the image processing in the URL based on the provided syntax (without *: api/convert?filename=*filename*&width=*number*&height=*number\*)
- Available image files are the ones provided by udacity. (encenadaport, fjord, icelandwaterfall, palmtunnel, santamonica)
- Run the API and check the thumb folder which includes the generated image

## Additional information

- Regarding prettier: The VSCode Extention was used for this project.

# Given Instructions

This project aims to give you a real-world scenario in which you would read and write to your disk via a Node.js express server rather than a database. The project you create serves two purposes: to prepare you for setting up scalable code and architecture for real-world projects and tie together some of the most popular middleware and utilities found in Node.js projects. This project barely touches the surface of what is possible but will prove your ability to use what you’ve learned in real-world scenarios.

For this project, refactor and test as much as possible while you are building. Since you are using TypeScript and an unfamiliar library, it is sometimes easier to write and build in plain JS to see what your functions return; remember your submission needs to be in TypeScript. As your skills improve, typing in TypeScript will feel more intuitive. Make sure to remove any debugging code from your final submission.

## Getting Started

Usually, you would get some starter code to build from, but with this project, it’s your job to prove you can do it from scratch, so all that is being provided for you is a folder of license-free stock images you are welcome to use. If you would like to use your own images for this project, you are welcome to do so, but whoever reviews your project will see your images, and when you display your project online, viewers will also see them.

You can use your own images or use the ones provided in this repo: [images](images)

## Instructions from Udacity

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

Folow middleware documentation to use middleware to create an API
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
