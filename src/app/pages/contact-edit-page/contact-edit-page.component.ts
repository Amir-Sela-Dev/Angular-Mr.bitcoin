import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contact-edit-page',
  templateUrl: './contact-edit-page.component.html',
  styleUrls: ['./contact-edit-page.component.scss']
})
export class ContactEditPageComponent {

  contact!: Contact
  subscription!: Subscription
  form!: FormGroup

  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
  ) {
    this.form = this.fb.group({
      name: ['', [Validators.required], []],  // [initialVal, validators, asyncValidators]
      email: '',
      phone: '',
    })
  }


  async ngOnInit() {
    this.subscription = this.route.data.subscribe(({ contact }) => {
      this.contact = contact || this.contactService.getEmptyContact() as Contact
    })
  }

  onRemove(ev: MouseEvent) {
    ev.stopPropagation()
    this.contactService.deleteContact(this.contact._id || '')
  }

  onBack() {
    this.router.navigateByUrl('/contact')
  }

  onSubmit() {
    if (this.contact._id) {
      let contact = {
        _id: this.contact._id,
        ...this.form.value
      }
      this.contactService.saveContact(contact)
    } else {
      let contact = { ...this.form.value }
      this.contactService.saveContact(contact)
    }
    this.router.navigateByUrl('/contact')
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}

