# Node.js Server Port Already in Use

This repository demonstrates a common error in Node.js: attempting to start a server on a port that is already in use.  The `server.js` file shows the problematic code, while `serverSolution.js` provides a solution.

## Problem

The `server.js` file creates a simple HTTP server using the `http` module. If you try to run this server and the port 8080 is already being used by another process, Node.js will throw an error. This typically happens if you run multiple instances of the server code or another application is already listening on that port.

## Solution

The `serverSolution.js` file shows a more robust approach to handling this situation using error handling.  It attempts to start the server on port 8080, and if that port is unavailable, it attempts to use a different port.