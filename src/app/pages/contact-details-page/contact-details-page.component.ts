import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { lastValueFrom, Subscription } from 'rxjs';
import { ContactService } from 'src/app/services/contact.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'ContactDetails',
  templateUrl: './contact-details-page.component.html',
  styleUrls: ['./contact-details-page.component.scss']
})
export class ContactDetailsPageComponent implements OnInit {

  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  @Input() contactId!: string

  contact!: Contact
  subscription!: Subscription

  async ngOnInit() {
    this.subscription = this.route.data.subscribe(data => {
      console.log(data);

      this.contact = data['contact']
    })
  }

  onBack() {
    this.router.navigateByUrl('/contact')
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }


}
