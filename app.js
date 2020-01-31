// const express = require("express"); // from node_moduels
import express from "express"; // barbel
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-Parser";
import { localMiddleware } from "./middleware";
import userRouter from "./routers/userRouter"; // if it is not export default => {userrouter}
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";

const app = express();
const path = require("path"); // to change the view path

// const FUNCTION = () => {};

// app.set("views", path.join(__dirname, "/viewspug")); 'to change the view path'
app.set("view engine", "pug");

app.use(helmet()); // security
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev")); // logging

app.use(localMiddleware);

// only separating URLs
app.use(routes.home, globalRouter); // ex) search, join, about page, home
app.use(routes.users, userRouter); //"/users/"
app.use(routes.videos, videoRouter); //"/videos/"

export default app; // when importing => exporting "app.object"
/*
1. call express. import from node_modules
2. execute it => express() => app
3. app.listen => call port => handleListening

get => response.

npm install @babel/preset-env
*/
/*
app.use is to USE a middleware.
app.get is to only answer to'GET requests' to a certain routes.

Simply app.use means “Run this on ALL requests”
app.get means “Run this on a GET request, for the given URL”
*/
