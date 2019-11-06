import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomgenComponent } from './randomgen.component';

describe('RandomgenComponent', () => {
  let component: RandomgenComponent;
  let fixture: ComponentFixture<RandomgenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomgenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomgenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
