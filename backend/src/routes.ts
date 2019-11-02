import { Router } from "express";
import AuthController from "./controllers/auth";
import RegisterController from "./controllers/register";
import PostController from "./controllers/post";
import FeedbackController from "./controllers/feedback";

const routes = Router();

// Dashboard Manager //
routes.post("/dashboard/createPartner", RegisterController.createPartner);

// Partner //

routes.post("/partner/login", AuthController.loginPartner);
routes.post("/partner/createAdmin", RegisterController.createAdminPartner);

// Admin Partner //

routes.post("/partnerAdmin/login", AuthController.loginPartnerAdmin);
routes.post("/partnerAdmin/createUser", RegisterController.createUser);

// User //

routes.post("/user/login", AuthController.loginUser);

// Post //
routes.post("/post/user", PostController.user);
routes.post("/post/partner", PostController.partner);

// Feedback //
routes.post("/feedback", FeedbackController.add);

export default routes;