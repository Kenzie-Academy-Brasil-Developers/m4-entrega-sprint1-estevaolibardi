import { Router } from "express";
import UsersController from "../controllers/users.controller";
import checkEmailAvailabilityMiddleware from "../middlewares/checkEmailAvailability.middleware";
import checkAdmMiddleware from "../middlewares/checkAdm.middleware";
import checkTokenMiddleware from "../middlewares/checkToken.middleware";

const usersRouter = Router();
const usersController = new UsersController();

usersRouter.post("", checkEmailAvailabilityMiddleware, usersController.store);

usersRouter.use(checkTokenMiddleware);

usersRouter.get("", checkAdmMiddleware, usersController.index);
usersRouter.get("/profile", usersController.profiler);

usersRouter.patch("/:id", checkAdmMiddleware, usersController.update);
usersRouter.delete("/:id", checkAdmMiddleware, usersController.delete);

export default usersRouter;
