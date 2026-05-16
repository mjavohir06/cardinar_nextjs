export interface UserType {
    id: number,
    email: string,
    role: Role
}

export enum Role {
    user = "user",
    superAdmin = "superAdmin",
    admin = "admin"
}