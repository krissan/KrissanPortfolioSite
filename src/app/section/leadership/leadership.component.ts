import { Component, Input } from '@angular/core';
import { SideSectionComponent } from '../../general/side-section/side-section.component';
import { Leadership } from '../../../typings';

@Component({
  selector: 'leadership-section',
  standalone: true,
  imports: [SideSectionComponent],
  templateUrl: './leadership.component.html',
  styleUrl: './leadership.component.scss'
})
export class LeadershipComponent {
  @Input() leadershipData: Leadership[] = [];
}
