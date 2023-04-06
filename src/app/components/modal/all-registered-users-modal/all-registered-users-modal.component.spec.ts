import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRegisteredUsersModalComponent } from './all-registered-users-modal.component';

describe('AllRegisteredUsersModalComponent', () => {
  let component: AllRegisteredUsersModalComponent;
  let fixture: ComponentFixture<AllRegisteredUsersModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllRegisteredUsersModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllRegisteredUsersModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
