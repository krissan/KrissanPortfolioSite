import { Component, Input } from '@angular/core';
import { StandardSectionComponent } from '../../general/standard-section/standard-section.component';
import { Project } from '../../../typings';
import { SkillIconComponent } from '../../general/skill-icon/skill-icon.component';
import { DateRangeComponent } from '../../general/date-range/date-range.component';
import { SubTitleComponent } from '../../general/sub-title/sub-title.component';
import { CommonModule } from '@angular/common';
import { LinkButtonComponent } from '../../general/link-button/link-button.component';
import { AppImageComponent } from '../../general/app-image/app-image.component';

@Component({
  selector: 'project-section',
  standalone: true,
  imports: [CommonModule, StandardSectionComponent,SkillIconComponent, DateRangeComponent, SubTitleComponent, LinkButtonComponent, AppImageComponent],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  @Input() projectData: Project[] = [];
  @Input() isLoading: boolean = true;
}
