export interface Feedback {
    id: string
    postId: string
    addedBy: string
    comment: string
}

export interface AddFeedback extends Feedback {
    type: FeedbackType
}

export enum FeedbackType {
    User,
    PartnerAdmin
}