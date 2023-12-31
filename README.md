# Image Processing API

This project aims to give you a real-world scenario in which you would read and write to your disk via a Node.js express server rather than a database. The project you create serves two purposes: to prepare you for setting up scalable code and architecture for real-world projects and tie together some of the most popular middleware and utilities found in Node.js projects. This project barely touches the surface of what is possible but will prove your ability to use what you’ve learned in real-world scenarios.

For this project, refactor and test as much as possible while you are building. Since you are using TypeScript and an unfamiliar library, it is sometimes easier to write and build in plain JS to see what your functions return; remember your submission needs to be in TypeScript. As your skills improve, typing in TypeScript will feel more intuitive. Make sure to remove any debugging code from your final submission.

## Getting Started
Install packages: npm install
Start to dev: npm start
Build app: npm run build
Test app: npm run jasmine
Format code: npm run prettier

Endpoint root: http://localhost:3000/
Image api: http://localhost:3000/images
Example: http://localhost:3000/images?filename=encenadaport&width=300&height=300

Images:
- encenadaport
- fjord
- icelandwaterfall
- palmtunnel
- santamonica

Location images:
/images
/images/thumbnails -> cached thumbnail images
