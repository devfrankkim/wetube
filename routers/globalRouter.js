/* eslint-disable import/no-cycle */
import express from "express";
import routes from "../routes";
import {
  videoHomeControllerGlobal,
  searchControllerGlobal
} from "../ControllersGlobal/videoController";
import {
  getJoinControllerGlobal,
  logoutControllerGlobal,
  postJoinControllerGlobal,
  getLoginControllerGlobal,
  postLoginControllerGlobal
} from "../ControllersGlobal/userController";

const globalRouter = express.Router();

// if it is not export default => import { useRouter }
globalRouter.get(routes.join, getJoinControllerGlobal); // "/join"
globalRouter.post(routes.join, postJoinControllerGlobal); // "/join"

globalRouter.get(routes.login, getLoginControllerGlobal); // "/login"
globalRouter.post(routes.login, postLoginControllerGlobal); // "/login"

globalRouter.get(routes.home, videoHomeControllerGlobal); // "/"
globalRouter.get(routes.search, searchControllerGlobal); // "/search"
globalRouter.get(routes.logout, logoutControllerGlobal); // "/logout"

// app.use(routes.home, globalRouter); // ex) search, join, about page, home

export default globalRouter;

// when somebody gets join, send a function routes.getJoin
