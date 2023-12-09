const express = require("express");
const app = express();
require("dotenv").config();
require("./app/config/db").connect();

// Parser
app.use(express.json());

// Routers
const homeRouter = require("./app/router/home.router");
const userRouter = require("./app/router/user.router");
const todoRouter = require("./app/router/todo.router");

app.use("", homeRouter);
app.use("/api/users/", userRouter);
app.use("/api/todo/", todoRouter);

app.get("*", (_req, res) => {
  res.status(404).json({ message: "Route not found" });
});

module.exports = app;
