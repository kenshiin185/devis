import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceUtilisateurComponent } from './espace-utilisateur.component';

describe('EspaceUtilisateurComponent', () => {
  let component: EspaceUtilisateurComponent;
  let fixture: ComponentFixture<EspaceUtilisateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspaceUtilisateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspaceUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
