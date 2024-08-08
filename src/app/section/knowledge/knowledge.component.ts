import { Component } from '@angular/core';
import { StandardSectionComponent } from '../../general/standard-section/standard-section.component';

@Component({
  selector: 'knowledge-section',
  standalone: true,
  imports: [StandardSectionComponent],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {

}
