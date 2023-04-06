import {Component, Input} from '@angular/core';
import {ComunitecaEvent} from "../../model/Event";
import {MatDialog} from "@angular/material/dialog";
import {UserEventRegistrationComponent} from "../modal/user-event-registration/user-event-registration.component";
import {EventService} from "../../services/event.service";
import {
  AllRegisteredUsersModalComponent
} from "../modal/all-registered-users-modal/all-registered-users-modal.component";

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
      width: '340px',
      height: '180px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result)
      {
        this.eventService
            .checkRegistrationForEvent(this.event.name, result)
            .subscribe(e => this.isRegistered = e);
      }
    });
  }

  openRegistration() {
    let dialogRef = this.dialog.open(UserEventRegistrationComponent, {
      width: '340px',
      height: '180px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result && result != "ALL")
      {
        this.eventService.registerPersonForEvent(this.event.name, result).subscribe();
      }
    });
  }

  getAllRegisteredUsers() {
    this.eventService
      .checkRegistrationForEventForAll(this.event.name)
      .subscribe((e: ComunitecaEvent[]) => {
        this.openAllRegisteredUsersModal(e[0].registeredUsers);
      });
  }

  private openAllRegisteredUsersModal(users: any) {
    let modalRef = this.dialog.open(AllRegisteredUsersModalComponent, {
      width: '360px',
    });

    modalRef.componentInstance.users = users;
  }
}
