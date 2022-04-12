import express from "express";
import loginRouter from "./routers/login.routes";
import usersRouter from "./routers/users.routes";

const port = 3000;
const app = express();

app.use(express.json());
app.use("/users", usersRouter);
app.use("/login", loginRouter);

app.listen(port, () => {
  console.log("Server started");
});
