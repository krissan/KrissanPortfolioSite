import { Component, Input } from '@angular/core';
import { StandardSectionComponent } from '../../general/standard-section/standard-section.component';
import { Experience } from '../../../typings';
import { CommonModule } from '@angular/common';
import { SkillIconComponent } from '../../general/skill-icon/skill-icon.component';
import { SubTitleComponent } from '../../general/sub-title/sub-title.component';
import { DateRangeComponent } from '../../general/date-range/date-range.component';
import { UtilService } from '../../general/util/util.service';
import { AppImageComponent } from '../../general/app-image/app-image.component';

@Component({
  selector: 'experience-section',
  standalone: true,
  imports: [StandardSectionComponent, CommonModule, SkillIconComponent, SubTitleComponent, DateRangeComponent, AppImageComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  @Input() experienceData: Experience[] = [];
  @Input() isLoading: boolean = true;

  constructor(public utilService: UtilService) {}
}
