import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationDevisComponent } from './creation-devis.component';

describe('CreationDevisComponent', () => {
  let component: CreationDevisComponent;
  let fixture: ComponentFixture<CreationDevisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreationDevisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationDevisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
