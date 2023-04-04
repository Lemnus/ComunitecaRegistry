import {Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {EventService} from "../../services/event.service";
import {ComunitecaEvent} from "../../model/Event";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-event-entry',
  templateUrl: './new-event-entry.component.html',
  styleUrls: ['./new-event-entry.component.scss']
})
export class NewEventEntryComponent {

  constructor(
    private formBuilder: FormBuilder,
    private eventService: EventService,
    private router: Router) {
  }

  newEventForm = this.formBuilder.group({
    name: ['', Validators.required],
    date: ['', Validators.required],
    notes: ''
  });

  onSubmit() {
    this.eventService.registerNewEvent(this.newEventForm.value as ComunitecaEvent);
    this.router.navigate(['']);
  }
}
