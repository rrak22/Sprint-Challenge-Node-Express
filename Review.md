# Review Questions

## What is Node.js?

Node.js is an environment for executing JavaScript outside of the browser. The primary purpose is to run JavaScript code on a server, where a browser is not available or useful.

## What is Express?

Express is a lean framework for running applications on a server. It supports the typical HTTP requests, responses, JSON parsing, and routing that server applications require, and allows you to add additional functionality.

## Mention two parts of Express that you learned about this week.

I learned about express.json() and how body parsing works/is necessary to work with data sent to you. I also learned about logging using middleware.

## What is Middleware?

Middleware is code that intercepts requests and responses in order to perform functions, afterwards passing control along to the next part of the application (which can be another piece of middleware).

## What is a Resource?

A resource is any data that you are exposing to a user via an endpoint. Users can then access the data using HTTP request methods.

## What can the API return to help clients know if a request was successful?

It can return the appropriate status code for a successful HTTP request, which is 200.

## How can we partition our application into sub-applications?

You can organize them separately and mount them using app.use().

## What is CORS and why do we need it?

CORS stands for Cross-Origin Resource Sharing, and what it does is give permission for a user to grab resources from a server with a different origin than the site they are currently on. It's necessary because there are security concerns related to grabbing arbitrary scripts, and mechanisms that prevent you from doing so by default.
