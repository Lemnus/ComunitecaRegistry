import {Injectable} from '@angular/core';
import {ApiService} from "./api.service";
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {ComunitecaEvent} from "../model/Event";
import {SnackBarService} from "./SnackBarService";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private result : ComunitecaEvent[] = [];
  private events: Subject<ComunitecaEvent[]> = new BehaviorSubject(this.result);

  constructor(private api: ApiService, private snackBar: SnackBarService) {
    this.updateEvents();
  }

  getEventsObservable() {
    return this.events.asObservable();
  }

  registerNewEvent(event: ComunitecaEvent) {
    this.api.post('event', event).subscribe(
      () => this.updateEvents(),
      () => this.snackBar.onError('Something went wrong when registering the event')
    );
  }

  registerPersonForEvent(eventName: string, userName: string): Observable<any> {
    return this.api.patch('event/' + eventName + '/' + userName);
  }

  checkRegistrationForEvent(eventName: string, userName: string): Observable<any> {
    return this.api.get('event/' + eventName + '/' + userName);
  }

  checkRegistrationForEventForAll(eventName: string): Observable<any> {
    return this.api.get('event/' + eventName + '/users');
  }

  private updateEvents() {
    this.api.get('events').subscribe(
      (e: ComunitecaEvent[]) => this.events.next(e as ComunitecaEvent[]),
      () => this.snackBar.onError('Something went wrong when retrieving events')
    );
  }
}
