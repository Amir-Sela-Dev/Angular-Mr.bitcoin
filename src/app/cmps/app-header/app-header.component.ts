import { Component } from '@angular/core';
import { User } from 'src/app/models/user.modal';
import { UserService } from 'src/app/services/user.service';

import { bitcoinService } from 'src/app/services/bitcoin.service';

@Component({
  selector: 'AppHeader',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent {
  constructor(private userService: UserService) { }
  // constructor(private bitcoinService: BitcoinService) { }

  user!: User
  rate!: Promise<number>
  ngOnInit(): void {
    this.user = this.userService.getUser()
    this.rate = bitcoinService.getRate()
  }

}
