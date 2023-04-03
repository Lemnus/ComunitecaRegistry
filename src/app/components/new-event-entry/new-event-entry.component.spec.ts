import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEventEntryComponent } from './new-event-entry.component';

describe('NewEventEntryComponent', () => {
  let component: NewEventEntryComponent;
  let fixture: ComponentFixture<NewEventEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewEventEntryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewEventEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
