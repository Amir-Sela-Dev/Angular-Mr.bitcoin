import { Injectable } from "@angular/core"
import { BehaviorSubject } from "rxjs"
import { Funds } from "../models/funds.modal"
import { User } from "../models/user.modal"
import { dbService } from "./db.service"
import { storageService } from "./storage.service"

const user = {
    name: "Puki Ben David",
    balance: 100,
    transactions: [],
    imgUrl: 'https://robohash.org/Puki'
}

const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'


@Injectable({
    providedIn: 'root'
})

export class UserService {

    private _user$ = new BehaviorSubject<User>(this.getLoggedinUser() as User)
    public user$ = this._user$.asObservable()


    public getUser() {
        return user
    }

    async signup(userCred: User) {
        if (!userCred.imgUrl) userCred.imgUrl = 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png'
        const user: User = await dbService.post('user', userCred)
        this._user$.next(user)
        return this.saveLocalUser(user)
    }

    async login(userCred: User) {
        const users: User[] = await storageService.load('user')
        const user = users.find(user => user.name === userCred.name)
        if (user) {
            this._user$.next(user)
            return this.saveLocalUser(user)
        } else throw new Error('You have no account, please sign up')
    }

    getLoggedinUser() {
        let user = sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER)
        if (!user) return null
        return JSON.parse(user) as User
    }

    getEmptyUser() {
        const user =
        {
            name: "",
            balance: 100,
            transactions: [],
            imgUrl: ''
        }
        return user
    }

    getEmptyFunds() {
        return {
            toId: "",
            to: "",
            at: 0,
            amount: 0
        }
    }

    async transferFunds(funds: Funds) {
        const user = this.getLoggedinUser()
        if (!user) throw new Error('Not loggedin')
        user.transactions.push(funds as any)
        user.balance -= funds.amount
        await this.update(user)
        this.saveLocalUser(user)
        this._user$.next(user)
        return user
    }

    async update(updatedUser: User) {
        let user = await dbService.put('user', updatedUser)
        return user
    }

    saveLocalUser(user: User) {
        user = { _id: user._id, name: user.name, imgUrl: user.imgUrl, balance: user.balance, transactions: user.transactions }
        sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
        return user
    }
}