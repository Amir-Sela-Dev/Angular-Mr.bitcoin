import { Component } from '@angular/core';
import { User } from 'src/app/models/user.modal';
import { bitcoinService } from 'src/app/services/bitcoin.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'HomePage',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  constructor(private userService: UserService) { }
  // constructor(private bitcoinService: BitcoinService) { }

  user!: User
  rate!: Promise<number>
  ngOnInit(): void {
    this.user = this.userService.getUser()
    this.rate = bitcoinService.getRate()
  }

}
