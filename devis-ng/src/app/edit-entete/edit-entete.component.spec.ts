import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEnteteComponent } from './edit-entete.component';

describe('EditEnteteComponent', () => {
  let component: EditEnteteComponent;
  let fixture: ComponentFixture<EditEnteteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEnteteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEnteteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
