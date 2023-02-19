import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'ContactPage',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent {

  constructor(private contactService: ContactService) { }

  contacts!: Contact[]
  contacts$!: Observable<Contact[]>
  subscription!: Subscription
  selectedContactId: string = ''
  prm = Promise.resolve('Resolved!')
  route: string = 'contacts'

  ngOnInit(): void {
    this.contactService.loadContacts()
    this.contacts$ = this.contactService.contacts$
    // this.subscription = this.contactService.contacts$.subscribe(contacts => {
    //     this.contacts = contacts
    // })
  }

  onSelectContactId(contactId: string) {
    console.log('contactId:', contactId)
    this.selectedContactId = contactId
  }

  changeRoute(route: string) {
    this.route = route
  }



}
