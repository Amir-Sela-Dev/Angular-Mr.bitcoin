import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { Funds } from 'src/app/models/funds.modal';
import { User } from 'src/app/models/user.modal';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'TransferFunds',
  templateUrl: './transfer-funds.component.html',
  styleUrls: ['./transfer-funds.component.scss']
})
export class TransferFundsComponent {

  constructor(
    private userService: UserService,
    private fb: FormBuilder,

  ) {
    this.form = this.fb.group({
      amount: [0, [Validators.required], []],  // [initialVal, validators, asyncValidators]
      contactName: '',
    })

  }

  @Input() contact!: Contact

  form!: FormGroup
  user!: User
  subscription!: Subscription
  isModalOpen = false
  funds = this.userService.getEmptyFunds()
  typeOfTransfer = "transfer"

  ngOnInit(): void {
    this.subscription = this.userService.user$.subscribe(user => {
      this.user = user
    })
  }

  onTransfer() {
    this.isModalOpen = true;
    this.typeOfTransfer = "transfer";
  }

  onRequest() {
    this.isModalOpen = true;
    this.typeOfTransfer = "request";
  }

  closeModal() {
    console.log('here');

    this.isModalOpen = false;
    this.typeOfTransfer = "";
  }

  async onSubmit() {
    let funds: Funds = this.funds;
    funds.at = Date.now();
    funds.to = this.contact.name;
    funds.toId = this.contact._id as string;
    funds.amount = this.form.value.amount;
    console.log('funds', funds)
    try {
      await this.userService.transferFunds(funds as Funds)
      this.closeModal()
    } catch (err) {
      console.log('err', err)
    }

  }
}
