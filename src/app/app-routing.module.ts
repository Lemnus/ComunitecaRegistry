import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NewEventEntryComponent} from "./components/new-event-entry/new-event-entry.component";
import {RegistryComponent} from "./components/registry/registry.component";

const routes: Routes = [
  {path: '', component: RegistryComponent},
  {path: 'new', component: NewEventEntryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
