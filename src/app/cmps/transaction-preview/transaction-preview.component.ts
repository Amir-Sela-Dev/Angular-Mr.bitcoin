import { Component, Input } from '@angular/core';
import { Funds } from 'src/app/models/funds.modal';

@Component({
  selector: 'TransactionPreview',
  templateUrl: './transaction-preview.component.html',
  styleUrls: ['./transaction-preview.component.scss']
})
export class TransactionPreviewComponent {


  @Input() transaction!: Funds

}
