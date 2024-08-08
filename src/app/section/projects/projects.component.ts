import { Component } from '@angular/core';
import { StandardSectionComponent } from '../../general/standard-section/standard-section.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [StandardSectionComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

}
