import { Component, Input } from '@angular/core';
import { StandardSectionComponent } from '../../general/standard-section/standard-section.component';
import { Experience } from '../../../typings';

@Component({
  selector: 'experience-section',
  standalone: true,
  imports: [StandardSectionComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  @Input() experienceData: Experience[] = [];
}
