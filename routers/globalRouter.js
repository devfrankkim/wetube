import express from "express";
import routes from "../routes";
import {
  videoHomeControllerGlobal,
  searchControllerGlobal
} from "../ControllersGlobal/videoController";
import {
  joinControllerGlobal,
  loginControllerGlobal,
  logoutControllerGlobal
} from "../ControllersGlobal/userController";

const globalRouter = express.Router();

// if it is not export default => import { useRouter }
globalRouter.get(routes.home, videoHomeControllerGlobal); // "/"
globalRouter.get(routes.search, searchControllerGlobal); // "/search"
globalRouter.get(routes.join, joinControllerGlobal); // "/join"
globalRouter.get(routes.login, loginControllerGlobal); // "/login"
globalRouter.get(routes.logout, logoutControllerGlobal); // "/logout"

// app.use(routes.home, globalRouter); // ex) search, join, about page, home

export default globalRouter;
