import { Component, Input } from '@angular/core';
import { SideSectionComponent } from '../../general/side-section/side-section.component';
import { Leadership } from '../../../typings';
import { TitleComponent } from '../../general/title/title.component';
import { CommonModule } from '@angular/common';
import { SubTitleComponent } from '../../general/sub-title/sub-title.component';
import { LinkButtonComponent } from '../../general/link-button/link-button.component';

@Component({
  selector: 'leadership-section',
  standalone: true,
  imports: [SideSectionComponent, TitleComponent, CommonModule, SubTitleComponent, LinkButtonComponent],
  templateUrl: './leadership.component.html',
  styleUrl: './leadership.component.scss'
})
export class LeadershipComponent {
  @Input() leadershipData: Leadership[] = [];
  @Input() isLoading: boolean = true;
}
