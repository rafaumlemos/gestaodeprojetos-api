import { knex } from "../postgresql";
import { Request, Response } from "express";
import { Post, PostContent, FeedbackContent } from "../models/post";
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
        if (!result) throw "post not found";
        const post: Post = result[0];
        return post;
    }

    public async getUsersPostContentById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const result = await getUsersPostContent(id);
            return res.json(result);
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                message: "get users post content error"
            });
        }
    }

    public async getPartnersPostContentById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const result = await getPartnersPostContent(id);
            return res.json(result);
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                message: "get partners post content error"
            });
        }
    }
    
}

async function getUsersPostContent(id: string) {
    try {
        const post = (await knex("posts_users").select(
            "posts_users.id",
            "title",
            "content",
            "image",
            "createdBy",
            "partnerId"
        ).where({id}))[0] as Post;
        if (!post) throw "post content not found";
        const feedbacks = (await knex("posts_users_feedbacks").select(
            "id as feedbackId",
            "addedBy",
            "comment",
            "createdAt",
            "updatedAt"
        ).where({"postId": id})) as FeedbackContent[];
        const response: PostContent = {...post, feedbacks};
        return response;
    } catch (error) {
        console.log(error);
        throw "get users post content error";
    }
}

async function getPartnersPostContent(id: string) {
    try {
        const post = (await knex("posts_partners").select(
            "posts_partners.id",
            "title",
            "content",
            "image",
            "createdBy",
            "partnerId"
        ).where({id}))[0] as Post;
        if (!post) throw "post content not found";
        const feedbacks = (await knex("posts_partners_feedbacks").select(
            "id as feedbackId",
            "addedBy",
            "comment",
            "createdAt",
            "updatedAt"
        ).where({"postId": id})) as FeedbackContent[];
        const response: PostContent = {...post, feedbacks};
        return response;
    } catch (error) {
        console.log(error);
        throw "get partners post content error";
    }
}

export default new PostController();