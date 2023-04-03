import {Component, Input} from '@angular/core';
import {ComunitecaEvent} from "../../model/Event";

@Component({
  selector: 'app-event-entry',
  templateUrl: './event-entry.component.html',
  styleUrls: ['./event-entry.component.scss']
})
export class EventEntryComponent {

  @Input()
  event: ComunitecaEvent = {name: 's', date: 's'};

}
