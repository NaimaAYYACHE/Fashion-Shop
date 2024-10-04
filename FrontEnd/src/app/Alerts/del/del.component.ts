import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-del',
  templateUrl: './del.component.html',
  styleUrls: ['./del.component.css']
})
export class DelComponent {
  constructor(public bsModalRef: BsModalRef) {}

  onCancelClick(): void {
    this.bsModalRef.hide();
  }

  onDeleteClick(): void {
    // Vous pouvez émettre un événement ou appeler une fonction pour effectuer la suppression
    this.bsModalRef.hide();
  }
}

