import { ComponentFixture, TestBed } from '@angular/core/testing';

import { coursesComponent } from './courses.component';

describe('coursesComponent', () => {
  let component: coursesComponent;
  let fixture: ComponentFixture<coursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [coursesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(coursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
