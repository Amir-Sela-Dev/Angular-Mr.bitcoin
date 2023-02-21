import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { User } from 'src/app/models/user.modal';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'TransactionList',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent {

  constructor(
    private userService: UserService,
  ) { }

  @Input() contact!: Contact
  @Input() currRoute!: string
  user!: User
  subscription!: Subscription

  ngOnInit(): void {
    this.subscription = this.userService.user$.subscribe(user => {
      this.user = user
    })

  }

  transactions() {
    if (this.currRoute === 'Details') {
      return this.user.transactions.filter(
        transaction => transaction.toId === this.contact._id
      );
    } else {
      let lastTransition = this.user.transactions.slice(-3);
      return lastTransition;
    }
  }

}
