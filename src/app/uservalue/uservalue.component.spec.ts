import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UservalueComponent } from './uservalue.component';

describe('UservalueComponent', () => {
  let component: UservalueComponent;
  let fixture: ComponentFixture<UservalueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UservalueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UservalueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
