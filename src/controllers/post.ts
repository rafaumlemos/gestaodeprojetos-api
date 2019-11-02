import { knex } from "../postgresql";
import { Request, Response } from "express";

class PostController {
    public async patient (req: Request, res: Response) {
        try {
            return res.json({
                message: "testing ok"
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                message: "patient post error"
            });
        }
    }

    public async partner (req: Request, res: Response) {
        try {
            return res.json({
                message: "testing ok"
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                message: "partner post error"
            });
        }
    }
}

export default new PostController();