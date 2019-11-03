export interface CreatePartnerAdmin {
    id: string
    name: string
    phone: string
    email: string
    password: string
    partnerId: string
    blocked: boolean
    dueDate: Date
}

export interface PartnerAdminLogin {
    email: string
    password: string
    partnerId: string
}

export interface PartnerAdmin {
    id: string
    name: string
    phone: string
    email: string
    partnerId: string
    blocked: boolean
}