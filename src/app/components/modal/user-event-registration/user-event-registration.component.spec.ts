import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEventRegistrationComponent } from './user-event-registration.component';

describe('UserEventRegistrationComponent', () => {
  let component: UserEventRegistrationComponent;
  let fixture: ComponentFixture<UserEventRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserEventRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserEventRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
