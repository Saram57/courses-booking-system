import { ComponentFixture, TestBed } from '@angular/core/testing';

import { coursescontantComponent } from './courses-contant.component';

describe('coursescontantComponent', () => {
  let component: coursescontantComponent;
  let fixture: ComponentFixture<coursescontantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [coursescontantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(coursescontantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
