import { Component } from '@angular/core';
import { User } from 'src/app/models/user.modal';
import { UserService } from 'src/app/services/user.service';

import { bitcoinService } from 'src/app/services/bitcoin.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'AppHeader',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent {
  constructor(
    private userService: UserService,
    private router: Router
  ) { }
  // constructor(private bitcoinService: BitcoinService) { }

  user!: User
  rate!: Promise<number>
  subscription!: Subscription
  isOptionOpen = false

  ngOnInit(): void {
    this.rate = bitcoinService.getRate()
    this.subscription = this.userService.user$.subscribe(user => {
      this.user = user
    })
  }

  switchUser() {
    this.isOptionOpen = !this.isOptionOpen
    this.router.navigate(['/signup'])
  }


}
