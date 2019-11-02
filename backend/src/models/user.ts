export interface CreateUser {
    id: string
    name: string
    phone: string
    email: string
    password: string
    partnerId: string
    blocked: boolean
    dueDate: Date
}

export interface UserLogin {
    email: string
    password: string
    partnerId: string
}

export interface User {
    id: string
    name: string
    phone: string
    email: string
    partnerId: string
}