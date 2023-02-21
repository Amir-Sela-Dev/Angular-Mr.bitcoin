import { Funds } from "./funds.modal";

export interface User {
    _id?: string,
    name: string,
    balance: number,
    transactions: Array<Funds>,
    imgUrl: string
}

