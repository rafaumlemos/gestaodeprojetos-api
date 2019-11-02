export interface CreatePostUser {
    id: string
    title: string
    content: string
    image: string | null
    userId: string
    partnerId: string
}

export interface CreatePostPartnerAdmin {
    id: string
    title: string
    content: string
    image: string | null
    partnerAdminId: string
    partnerId: string
}