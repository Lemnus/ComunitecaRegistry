import {Component, Input} from '@angular/core';
import {ComunitecaEvent} from "../../model/Event";
import {MatDialog} from "@angular/material/dialog";
import {UserEventRegistrationComponent} from "../modal/user-event-registration/user-event-registration.component";
import {EventService} from "../../services/event.service";

@Component({
  selector: 'app-event-entry',
  templateUrl: './event-entry.component.html',
  styleUrls: ['./event-entry.component.scss']
})
export class EventEntryComponent {

  @Input()
  event: ComunitecaEvent = {name: 's', date: 's'};

  isRegistered: boolean = false;

  constructor(private dialog: MatDialog, private eventService: EventService) {
  }

  checkRegistration() {
    let dialogRef = this.dialog.open(UserEventRegistrationComponent, {
      height: '180px',
      width: '320px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result)
      {
        if(result == 'ALL')
          this.eventService
            .checkRegistrationForEventForAll(this.event.name)
            .subscribe((e: ComunitecaEvent[]) => {
              console.log(e[0].registeredUsers);
            });
        else
          this.eventService
            .checkRegistrationForEvent(this.event.name, result)
            .subscribe(e => this.isRegistered = e);
      }
    });
  }

  openRegistration() {
    let dialogRef = this.dialog.open(UserEventRegistrationComponent, {
      height: '150px',
      width: '320px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result && result != "ALL")
      {
        this.eventService.registerPersonForEvent(this.event.name, result).subscribe();
      }
    });
  }
}
