import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrashCoursePage } from './crash-course.page';

describe('CrashCoursePage', () => {
  let component: CrashCoursePage;
  let fixture: ComponentFixture<CrashCoursePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrashCoursePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrashCoursePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
