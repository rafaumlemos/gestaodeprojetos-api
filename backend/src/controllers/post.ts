import { knex } from "../postgresql";
import { Request, Response } from "express";
import { Post } from "../models/post";
import * as uuid from "uuid";
import { FeedbackType } from "../models/feedback";

class PostController {
    public async user (req: Request, res: Response) {
        try {
            // validate user and get partner id
            const id = uuid.v4();
            const post: Post = {
                id,
                title: req.body.title,
                content: req.body.content,
                image: req.body.image || null,
                partnerId: "mock",
                createdBy: req.body.createdBy
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
            const post: Post = {
                id,
                title: req.body.title,
                content: req.body.content,
                image: req.body.image || null,
                partnerId: "mock",
                createdBy: req.body.createdBy
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

    public async getPost(id: string, type: FeedbackType): Promise<Post> {
        const table = type === FeedbackType.User ? "posts_users" : "posts_partners";
        const result = await knex(table).select(
            "id",
            "title",
            "content",
            "image",
            "createdBy",
            "partnerId"
        ).where({id});
        if (!!result) throw "post not found";
        const post: Post = result[0];
        return post;
    }
}

export default new PostController();