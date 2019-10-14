import { knex } from "../postgresql";
import { Request, Response } from "express";

class RegisterController {
    public async createPartner (req: Request, res: Response) {
        try {
            return res.json({
                message: "testing ok"
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                message: "error on create user"
            });
        }
    }

    public async createAdminPartner (req: Request, res: Response) {
        try {
            return res.json({
                message: "testing ok"
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                message: "error on create user"
            });
        }
    }

    public async createUser (req: Request, res: Response) {
        try {
            return res.json({
                message: "testing ok"
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                message: "error on create user"
            });
        }
    }
}

export default new RegisterController();