const user = require("./userRouter");
const photo = require("./photoRouter");

const initializeRouter = (app) => {
  app.use("/api/users", user);
  app.use("/api/photos", photo);
};

module.exports = initializeRouter;
