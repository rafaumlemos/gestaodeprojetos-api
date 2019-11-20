export interface Post {
    id: string
    title: string
    content: string
    image: string | null
    createdBy: Date
    partnerId: string
}

export interface FeedbackContent {
    feedbackId: string;
    addedBy: string;
    comment: string;
    createdAt: Date;
    updatedAt: Date | null;
}

export interface PostContent extends Post {
    feedbacks: FeedbackContent[]
}