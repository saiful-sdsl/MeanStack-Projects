import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardtypedetectorComponent } from './cardtypedetector.component';

describe('CardtypedetectorComponent', () => {
  let component: CardtypedetectorComponent;
  let fixture: ComponentFixture<CardtypedetectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardtypedetectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardtypedetectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
