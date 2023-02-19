import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { lastValueFrom } from 'rxjs';
import { ContactService } from 'src/app/services/contact.service';


@Component({
  selector: 'ContactDetails',
  templateUrl: './contact-details-page.component.html',
  styleUrls: ['./contact-details-page.component.scss']
})
export class ContactDetailsPageComponent implements OnInit {

  constructor(private contactService: ContactService) { }

  @Input() contactId!: string

  contact!: Contact | undefined

  async ngOnInit() {
    const contact = await lastValueFrom(this.contactService.getContactById(this.contactId))
    this.contact = contact
  }

}
