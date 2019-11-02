import { knex } from "../postgresql";
import { Request, Response } from "express";

class FeedbackController {
    public async add (req: Request, res: Response) {
        try {
            return res.json({
                message: "testing ok"
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                message: "add feedback error"
            });
        }
    }
}

export default new FeedbackController();