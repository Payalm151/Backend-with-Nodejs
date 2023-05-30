const express = require("express");
const bodyparser = require("body-parser");
const routerUser = require("./routes/user");
const cors = require ("cors");

const app = express()
app.use(bodyparser.json());
app.use(cors());
app.use("/user", routerUser);

app.listen(4000, "0.0.0.0", () => {
  console.log("application started on port 4000");
});