import { knex } from "../postgresql";
import { Request, Response } from "express";

class AuthController {
    public async login (req: Request, res: Response) {
        try {
            return res.json({
                message: "testing ok"
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                message: "auth error"
            });
        }
    }
}

export default new AuthController();