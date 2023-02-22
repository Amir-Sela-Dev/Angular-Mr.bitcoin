import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { MarketPrice } from 'src/app/models/graph.model';
import { User } from 'src/app/models/user.modal';
import { BitcoinService } from 'src/app/services/bitcoin.service';
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
    private bitcoinService: BitcoinService,
    private router: Router,

  ) { }
  // constructor(private bitcoinService: BitcoinService) { }

  user!: User
  rate!: Observable<number>
  prices$!: Observable<MarketPrice>
  subscription!: Subscription
  currRoute = 'Home-page'

  ngOnInit(): void {
    this.rate = this.bitcoinService.getRate()
    this.prices$ = this.bitcoinService.getMarketPrice()
    this.subscription = this.userService.user$.subscribe(user => {
      if (!user) this.router.navigateByUrl('/signup')
      this.user = user
    })
  }
}
