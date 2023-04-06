import {Component} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-all-registered-users-modal',
  templateUrl: './all-registered-users-modal.component.html',
  styleUrls: ['./all-registered-users-modal.component.scss']
})
export class AllRegisteredUsersModalComponent {

  users: string[] = [];

  constructor(public dialogRef: MatDialogRef<AllRegisteredUsersModalComponent>) {
  }

  close() {
    this.dialogRef.close();
  }
}
