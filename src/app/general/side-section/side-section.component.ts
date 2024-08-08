import { Component, Input } from '@angular/core';
import { TitleComponent } from '../title/title.component';

@Component({
  selector: 'side-section',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './side-section.component.html',
  styleUrl: './side-section.component.scss'
})
export class SideSectionComponent {
  @Input() title: string = "";
  @Input() bgColor: string = "bg-white";
}
