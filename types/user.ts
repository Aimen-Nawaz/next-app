import { UUID } from "crypto"
import { Interface } from "readline"

export type User = {
    id: UUID,
    name: String,
    email: String,

}

export interface UserResponse {
    message: String,
    data: User[]
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