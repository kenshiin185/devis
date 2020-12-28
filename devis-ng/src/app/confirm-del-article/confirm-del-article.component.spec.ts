import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDelArticleComponent } from './confirm-del-article.component';

describe('ConfirmDelArticleComponent', () => {
  let component: ConfirmDelArticleComponent;
  let fixture: ComponentFixture<ConfirmDelArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmDelArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmDelArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
