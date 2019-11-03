import { knex } from "../postgresql";
import { Request, Response } from "express";
import { CreatePostPartnerAdmin, CreatePostUser } from "../models/post";
import * as uuid from "uuid";

class PostController {
    public async user (req: Request, res: Response) {
        try {
            // validate user and get partner id
            const id = uuid.v4();
            const post: CreatePostUser = {
                id,
                title: req.body.title,
                content: req.body.content,
                image: req.body.image || null,
                partnerId: "mock",
                userId: req.body.userId
            };

            await knex("posts_users").insert(post);

            return res.json({
                id
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                message: "create user post error"
            });
        }
    }

    public async partner (req: Request, res: Response) {
        try {
            // validate partner admin and get partner id
            const id = uuid.v4();
            const post: CreatePostPartnerAdmin = {
                id,
                title: req.body.title,
                content: req.body.content,
                image: req.body.image || null,
                partnerId: "mock",
                partnerAdminId: req.body.partnerAdminId
            };

            await knex("posts_partners").insert(post);

            return res.json({
                id
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