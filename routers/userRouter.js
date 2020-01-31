import express from "express";
import routes from "../routes";
import {
  usersController,
  usersDetailController,
  usersEditProfileController,
  usersChangePassword
} from "../ControllersGlobal/userController";

const userRouter = express.Router();

userRouter.get(routes.users, usersController);
userRouter.get(routes.editProfile, usersEditProfileController);
userRouter.get(routes.changePassword, usersChangePassword);
userRouter.get(routes.userDetail, usersDetailController);

export default userRouter;
// if it is not export default userRouter => import { useRouter }
