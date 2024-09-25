import { Component, Input } from '@angular/core';
import { TitleComponent } from '../title/title.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'side-section',
  standalone: true,
  imports: [TitleComponent, CommonModule],
  templateUrl: './side-section.component.html',
  styleUrl: './side-section.component.scss'
})
export class SideSectionComponent {
  @Input() isLoading: boolean = true;
}
