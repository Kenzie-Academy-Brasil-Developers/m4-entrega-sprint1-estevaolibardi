import { Router } from "express";
import UsersController from "../controllers/users.controller";
import verifyEmailAvailabilityMiddleware from "../middlewares/verifyEmailAvailability.middleware";
import ensureAuthTokenAdmMiddleware from "../middlewares/ensureAuthTokenAdm.middleware";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";

const usersRouter = Router();
const usersController = new UsersController();

usersRouter.post("", verifyEmailAvailabilityMiddleware, usersController.store);
usersRouter.get("", ensureAuthTokenAdmMiddleware, usersController.index);
usersRouter.get("/profile", ensureAuthMiddleware, usersController.profiler);
usersRouter.patch(
  "/:uuid",
  ensureAuthTokenAdmMiddleware,
  usersController.update
);
usersRouter.delete("/:uuid", ensureAuthMiddleware, usersController.delete);

export default usersRouter;
