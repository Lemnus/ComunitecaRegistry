import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewEventEntryComponent } from './components/new-event-entry/new-event-entry.component';
import { EventEntryComponent } from './components/event-entry/event-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    NewEventEntryComponent,
    EventEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
