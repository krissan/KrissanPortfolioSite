import { Component, Input } from '@angular/core';
import { StandardSectionComponent } from '../../general/standard-section/standard-section.component';
import { Knowledge } from '../../../typings';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'knowledge-section',
  standalone: true,
  imports: [StandardSectionComponent, CommonModule],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  @Input() knowledgeData: Knowledge[] = [];
}
