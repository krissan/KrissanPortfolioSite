import { Component, Input } from '@angular/core';
import { StandardSectionComponent } from '../../general/standard-section/standard-section.component';
import { Project } from '../../../typings';

@Component({
  selector: 'project-section',
  standalone: true,
  imports: [StandardSectionComponent],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  @Input() projectData: Project[] = [];
}
