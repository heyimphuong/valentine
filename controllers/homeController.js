const getLoginPage = (req, res) => {
  res.render("login.ejs", { errorMessage: null });
};

const getRegisterPage = (req, res) => {
  return res.render("register.ejs");
};

const getHomePage = (req, res) => {
  return res.render("home.ejs");
};

const getLovePage = (req, res) => {
  return res.render("love.ejs");
};

export default {
  getLoginPage,
  getRegisterPage,
  getHomePage,
  getLovePage,
};
