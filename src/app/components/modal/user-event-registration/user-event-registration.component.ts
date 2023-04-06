import {Component} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-user-event-registration',
  templateUrl: './user-event-registration.component.html',
  styleUrls: ['./user-event-registration.component.scss']
})
export class UserEventRegistrationComponent {

  userNameForm = this.formBuilder.group({
    name: ['', Validators.required]
  });

  constructor(public dialogRef: MatDialogRef<UserEventRegistrationComponent>,
              private formBuilder: FormBuilder) {
  }

  confirm() {
      this.dialogRef.close(this.userNameForm.controls.name.value);
  }

  exit() {
    this.dialogRef.close(null);
  }

  getAll() {
    this.dialogRef.close('ALL');
  }
}
