const express = require("express");
require("./connect");
const initializeRouter = require("./routers");

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

initializeRouter(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
