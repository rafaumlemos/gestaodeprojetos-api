import { Router } from "express";
import AuthController from "./controllers/auth";
import RegisterController from "./controllers/register";

const routes = Router();

// Dashboard Manager //
routes.post("/dashboard/createPartner", RegisterController.createPartner);

// Partner //

routes.post("/partner/login", AuthController.loginPartner);
routes.post("/partner/createAdmin", RegisterController.createAdminPartner);

// Admin Partner //

routes.post("/partnerAdmin/login", AuthController.loginPartnerAdmin);
routes.post("/user/create", RegisterController.createUser);

// User //

routes.post("/user/login", AuthController.loginUser);

export default routes;