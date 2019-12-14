import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('TasLoginComponent', () => {
  let component: TasLoginComponent;
  let fixture: ComponentFixture<TasLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
