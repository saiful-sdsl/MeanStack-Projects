import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchjobsComponent } from './searchjobs.component';

describe('SearchjobsComponent', () => {
  let component: SearchjobsComponent;
  let fixture: ComponentFixture<SearchjobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchjobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchjobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
