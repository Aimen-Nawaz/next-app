import { UUID } from "crypto"
import { Interface } from "readline"

export type User = {
    id: UUID,
    name: String,
    email: String,

}

export interface UserResponse {
    message: String,
    data:User[]
}