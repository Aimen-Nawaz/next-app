import { UUID } from "crypto"
import { Interface } from "readline"

export type WishList = {
    id: UUID,
    UserId: UUID,
    productId: UUID,
    product: {
        id: UUID,
        name: string,
        image: string
        price: string
    }
    createdAt: Date
}

export type User = {
    id: UUID,
    name: String,
    email: String,
    wishList: WishList[]

}

export interface UsersResponse {
    message: String,
    data: User[]
}
export interface UserResponse {
    message: String,
    data: User
}

export type Login = {
    email: string,
    password: string
}

export type VerifyEmail = {
    email: string;
};
export type ResetPassword = {
    email: string;
    password: string;
};

export type Register = {
    name: string,
    email: string,
    password: string
}