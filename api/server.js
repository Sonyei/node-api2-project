// implement your server here
// require your posts router and connect it here
const express = require("express");
const homeRouter = require("./posts/posts-home");
const postsRouter = require("./posts/posts-router");
const server = express();

server.use(express.json());
server.use(homeRouter);
server.use(postsRouter);
module.exports = server;
