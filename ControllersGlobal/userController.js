export const joinControllerGlobal = (req, res) =>
  res.render("join.pug", { pageTitle: "Join" });
export const loginControllerGlobal = (req, res) =>
  res.render("login.pug", { pageTitle: "Log in" });
export const logoutControllerGlobal = (req, res) =>
  res.render("logout.pug", { pageTitle: "Log out" });
export const usersController = (req, res) =>
  res.render("users.pug", { pageTitle: "users" });
export const usersDetailController = (req, res) =>
  res.render("UserDetail.pug", { pageTitle: "User Detail" });
export const usersEditProfileController = (req, res) =>
  res.render("EditProfile.pug", { pageTitle: "Edit profile" });
export const usersChangePassword = (req, res) =>
  res.render("ChangePassword.pug", { pageTitle: "Change Password" });
