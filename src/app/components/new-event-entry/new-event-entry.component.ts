import {Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-new-event-entry',
  templateUrl: './new-event-entry.component.html',
  styleUrls: ['./new-event-entry.component.scss']
})
export class NewEventEntryComponent {

  constructor(private formBuilder: FormBuilder) {
  }

  newEventForm = this.formBuilder.group({
    name: ['', Validators.required],
    date: ['', Validators.required],
    notes: ''
  });

  onSubmit() {
    console.log(this.newEventForm.value);
  }
}
