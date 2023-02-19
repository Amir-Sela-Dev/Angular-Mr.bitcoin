import { Injectable } from "@angular/core"

const user = {
    name: "Puki Ben David",
    balance: 100,
    transactions: [],
    imgUrl: 'https://robohash.org/Puki'
}

@Injectable({
    providedIn: 'root'
})

export class UserService {

    public getUser() {
        return user
    }
}