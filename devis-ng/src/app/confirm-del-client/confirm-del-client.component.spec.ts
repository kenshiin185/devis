import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDelClientComponent } from './confirm-del-client.component';

describe('ConfirmDelClientComponent', () => {
  let component: ConfirmDelClientComponent;
  let fixture: ComponentFixture<ConfirmDelClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmDelClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmDelClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
