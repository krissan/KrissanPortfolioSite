import { Component, Input } from '@angular/core';
import { StandardSectionComponent } from '../../general/standard-section/standard-section.component';
import { Knowledge } from '../../../typings';
import { CommonModule } from '@angular/common';
import { SkillIconComponent } from '../../general/skill-icon/skill-icon.component';
import { SubTitleComponent } from '../../general/sub-title/sub-title.component';

@Component({
  selector: 'knowledge-section',
  standalone: true,
  imports: [StandardSectionComponent, CommonModule, SkillIconComponent, SubTitleComponent],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  @Input() knowledgeData: Knowledge[] = [];
  @Input() isLoading: boolean = true;
}
