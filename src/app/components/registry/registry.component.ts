import {Component, OnInit} from '@angular/core';
import {EventService} from "../../services/event.service";
import {ComunitecaEvent} from "../../model/Event";

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.scss']
})
export class RegistryComponent implements OnInit {

  events: ComunitecaEvent[] = [];

  constructor(private eventService: EventService) {
  }

  ngOnInit(): void {
    this.eventService.getEventsObservable().subscribe(e => this.events = e);
  }
}
