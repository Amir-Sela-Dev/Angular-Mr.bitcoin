import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { User } from 'src/app/models/user.modal';
import { ContactService } from 'src/app/services/contact.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'ContactPage',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent {

  constructor(
    private contactService: ContactService,
    private userService: UserService,
    private router: Router,
  ) { }

  contacts$!: Observable<Contact[]>
  subscription!: Subscription
  selectedContactId: string = ''


  ngOnInit(): void {
    this.contactService.loadContacts()
    this.contacts$ = this.contactService.contacts$
    this.subscription = this.userService.user$.subscribe(user => {
      if (!user) this.router.navigateByUrl('/signup')
    })

  }

  onRemoveContact(contactId: string) {
    this.contactService.deleteContact(contactId)
  }






}
