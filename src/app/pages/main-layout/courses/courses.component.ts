import { Component } from '@angular/core';
import { GeneralSectionComponent } from '../../../shared/components/general-section/general-section.component';
import { HeaderComponent } from '../../../core/components/header/header.component';
import { coursescontantComponent } from '../courses-contant/courses-contant.component';
import { IconComponent } from '../../../shared/components/icon/icon.component';

@Component({
  selector: 'app-courses',
  imports: [
    GeneralSectionComponent,
    HeaderComponent,
    coursescontantComponent,
    IconComponent,
  ],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
})
export class coursesComponent {}
