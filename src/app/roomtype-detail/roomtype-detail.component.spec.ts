import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomtypeDetailComponent } from './roomtype-detail.component';

describe('RoomtypeDetailComponent', () => {
  let component: RoomtypeDetailComponent;
  let fixture: ComponentFixture<RoomtypeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomtypeDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomtypeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
