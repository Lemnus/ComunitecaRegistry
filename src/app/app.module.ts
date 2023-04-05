import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NewEventEntryComponent} from './components/new-event-entry/new-event-entry.component';
import {EventEntryComponent} from './components/event-entry/event-entry.component';
import {RegistryComponent} from './components/registry/registry.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import { UserEventRegistrationComponent } from './components/modal/user-event-registration/user-event-registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from "@angular/material/dialog";

@NgModule({
  declarations: [
    AppComponent,
    NewEventEntryComponent,
    EventEntryComponent,
    RegistryComponent,
    UserEventRegistrationComponent
  ],
  entryComponents: [UserEventRegistrationComponent],
  imports: [
    MatDialogModule,
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}