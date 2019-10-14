import { Router } from "express";
import AuthController from "./controllers/auth";
import RegisterController from "./controllers/register";

const routes = Router();

routes.post("/register", RegisterController.create);
routes.post("/login", AuthController.login);

export default routes;