import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalldoneComponent } from './calldone.component';

describe('CalldoneComponent', () => {
  let component: CalldoneComponent;
  let fixture: ComponentFixture<CalldoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalldoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalldoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
