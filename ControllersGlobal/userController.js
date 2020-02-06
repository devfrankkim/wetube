import routes from "../routes";

export const getJoinControllerGlobal = (req, res) => {
  res.render("join.pug", { pageTitle: "Join" });
};

export const postJoinControllerGlobal = (req, res) => {
  const {
    body: { name, email, password, password2 }
  } = req;
  if (password !== password2) {
    res.status(400);
    res.render("join.pug", { pageTitle: "Join" });
  } else {
    // To Do: Resistered user
    // To Do: Log user in
    res.redirect(routes.home);
  }
};

export const getLoginControllerGlobal = (req, res) => {
  res.render("login.pug", { pageTitle: "Log in" });
};

export const postLoginControllerGlobal = (req, res) => {
  console.log(req.body);
  res.redirect(routes.home);
};

export const logoutControllerGlobal = (req, res) => {
  // To Do: Process Log Out

  res.redirect(routes.home);
};
export const usersController = (req, res) =>
  res.render("users.pug", { pageTitle: "users" });

export const usersDetailController = (req, res) =>
  res.render("UserDetail.pug", { pageTitle: "User Detail" });
export const usersEditProfileController = (req, res) =>
  res.render("EditProfile.pug", { pageTitle: "Edit profile" });
export const usersChangePassword = (req, res) =>
  res.render("ChangePassword.pug", { pageTitle: "Change Password" });

//res.render를 한다면, 상태코드로 화면을 표시할 수 있다.
