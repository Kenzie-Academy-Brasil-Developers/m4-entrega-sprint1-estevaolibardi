import LoginController from "../controllers/logins.controller";
import { Router } from "express";

const loginRouter = Router();

const loginController = new LoginController();

loginRouter.post("", loginController.store);

export default loginRouter;
