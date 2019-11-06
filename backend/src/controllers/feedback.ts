import { knex } from "../postgresql";
import { Request, Response } from "express";
import { AddFeedback, FeedbackType, Feedback } from "../models/feedback";
import PostController from "../controllers/post";
import * as uuid from "uuid";

class FeedbackController {
    public async add (req: Request, res: Response) {
        try {
            const { postId, addedBy, comment, type }: AddFeedback = req.body;
            const id = uuid.v4();
            const feedbackInfo: Feedback = {
                id,
                addedBy,
                comment,
                postId
            };

            if (type === FeedbackType.PartnerAdmin) {
                const post = await PostController.getPost(postId, type);
                await knex("posts_partners_feedbacks").insert(feedbackInfo);
            } else {
                const post = await PostController.getPost(postId, type);
                await knex("posts_users_feedbacks").insert(feedbackInfo);
            }
            
            return res.json({
                id
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