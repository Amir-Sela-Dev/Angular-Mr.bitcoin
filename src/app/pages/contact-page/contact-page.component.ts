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

  contacts$!: Observable<Contact[]>
  subscription!: Subscription
  selectedContactId: string = ''

  ngOnInit(): void {
    this.contactService.loadContacts()
    this.contacts$ = this.contactService.contacts$
  }

  onRemoveContact(contactId: string) {
    this.contactService.deleteContact(contactId)
  }






}
