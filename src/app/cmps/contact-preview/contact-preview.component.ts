import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { Router } from '@angular/router';

@Component({
  selector: 'ContactPreview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.scss']
})
export class ContactPreviewComponent {
  constructor(private router: Router) { }

  @Input() contact!: Contact
  @Output() remove = new EventEmitter()
  isOptionOpen = false


  onRemoveContact(ev: MouseEvent) {
    ev.stopPropagation()
    this.remove.emit(this.contact._id)
  }


  toogleModal() {
    this.isOptionOpen = !this.isOptionOpen
  }

  onEditContact(ev: MouseEvent) {
    ev.stopPropagation()
    this.router.navigate(['/contact/edit', this.contact._id])
  }


}
