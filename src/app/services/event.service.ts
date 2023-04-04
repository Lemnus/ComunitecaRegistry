import {Injectable} from '@angular/core';
import {ApiService} from "./api.service";
import {BehaviorSubject, Subject} from "rxjs";
import {ComunitecaEvent} from "../model/Event";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private result : ComunitecaEvent[] = [];
  private events: Subject<ComunitecaEvent[]> = new BehaviorSubject(this.result);

  constructor(private api: ApiService) {
    this.updateEvents();
  }

  getEventsObservable() {
    return this.events.asObservable();
  }

  registerNewEvent(event: ComunitecaEvent) {
    this.api.post('event', event).subscribe(() => this.updateEvents());
  }

  private updateEvents() {
    this.api.get('events').subscribe(
      (e: ComunitecaEvent[]) => {
        this.events.next(e as ComunitecaEvent[]);
      }
    );
  }
}
