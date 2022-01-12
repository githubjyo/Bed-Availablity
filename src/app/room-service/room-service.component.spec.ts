import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomServiceComponent } from './room-service.component';

describe('RoomServiceComponent', () => {
  let component: RoomServiceComponent;
  let fixture: ComponentFixture<RoomServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
