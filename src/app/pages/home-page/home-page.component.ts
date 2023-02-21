import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.modal';
import { bitcoinService } from 'src/app/services/bitcoin.service';
import { ContactService } from 'src/app/services/contact.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'HomePage',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  constructor(
    private userService: UserService,
    private router: Router,
  ) { }
  // constructor(private bitcoinService: BitcoinService) { }

  user!: User
  rate!: Promise<number>
  subscription!: Subscription
  currRoute = 'Home-page'

  ngOnInit(): void {
    this.rate = bitcoinService.getRate()
    this.subscription = this.userService.user$.subscribe(user => {
      if (!user) this.router.navigateByUrl('/signup')
      this.user = user
    })
  }
}
