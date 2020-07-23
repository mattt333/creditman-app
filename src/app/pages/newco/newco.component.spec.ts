import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcoComponent } from './newco.component';

describe('NewcoComponent', () => {
  let component: NewcoComponent;
  let fixture: ComponentFixture<NewcoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewcoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
