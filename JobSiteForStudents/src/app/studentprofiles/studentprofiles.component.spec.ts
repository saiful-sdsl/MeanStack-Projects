import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentprofilesComponent } from './studentprofiles.component';

describe('StudentprofilesComponent', () => {
  let component: StudentprofilesComponent;
  let fixture: ComponentFixture<StudentprofilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentprofilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentprofilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
