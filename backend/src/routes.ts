import { Router } from "express";
import AuthController from "./controllers/auth";
import RegisterController from "./controllers/register";
import PostController from "./controllers/post";
import FeedbackController from "./controllers/feedback";

const routes = Router();

// Dashboard Manager //
routes.post("/dashboard/createPartner", RegisterController.createPartner);

// Partner Dashboard //

routes.post("/partner/createAdmin", RegisterController.createAdminPartner);

// Admin Partner //

routes.post("/partnerAdmin/login", AuthController.loginPartnerAdmin);
routes.post("/partnerAdmin/createUser", RegisterController.createUser);

// User //

routes.post("/user/login", AuthController.loginUser);

// Post //
routes.post("/post/user", PostController.user);
routes.post("/post/partner", PostController.partner);
routes.get("/post/users/:id", PostController.getUsersPostContentById);
routes.get("/post/partners/:id", PostController.getPartnersPostContentById);

// Feedback //
routes.post("/feedback", FeedbackController.add);

export default routes;