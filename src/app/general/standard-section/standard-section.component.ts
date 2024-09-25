import { Component, Input } from '@angular/core';
import { TitleComponent } from '../title/title.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'standard-section',
  standalone: true,
  imports: [TitleComponent, CommonModule],
  templateUrl: './standard-section.component.html',
  styleUrl: './standard-section.component.scss'
})
export class StandardSectionComponent {
  @Input() title: string = "";
  @Input() isLoading: boolean = true;
}
