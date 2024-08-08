import { Component, Input } from '@angular/core';
import { TitleComponent } from '../title/title.component';

@Component({
  selector: 'standard-section',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './standard-section.component.html',
  styleUrl: './standard-section.component.scss'
})
export class StandardSectionComponent {
  @Input() title: string = "";
  @Input() bgColor: string = "bg-white";
}
