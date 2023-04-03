import {Injectable} from '@angular/core';
import {ApiService} from "./api.service";
import {Observable, of} from "rxjs";
import {ComunitecaEvent} from "../model/Event";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private events: Observable<ComunitecaEvent[]> = of([]);
  public _events: ComunitecaEvent[] = [];

  constructor(private api: ApiService) {
    this.events = this.getEvents();
  }

  registerNewEvent(event: ComunitecaEvent) {
    console.log(event);
    // this.api.post()
    this._events.push(event);
  }

  getEvents() {
    return of([
      {
        name: 'Ev1',
        date: 'Sun 18th, 15:30-16:30'
      } as ComunitecaEvent,
      {
        name: 'Ev2',
        date: 'Sun 20th, 15:30-16:30',
        notes: 'Notes sgfdhg jgfgy  fgh gf'
      } as ComunitecaEvent
    ])
  }

  // getEvents(): Observable<Event[]> {
  //   // @ts-ignore
  //   return this.api.get('');
  // }
}
