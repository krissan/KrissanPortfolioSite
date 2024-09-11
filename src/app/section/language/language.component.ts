import { Component, Input } from '@angular/core';
import { SideSectionComponent } from '../../general/side-section/side-section.component';
import { Language } from '../../../typings';

@Component({
  selector: 'language-section',
  standalone: true,
  imports: [SideSectionComponent],
  templateUrl: './language.component.html',
  styleUrl: './language.component.scss'
})
export class LanguageComponent {
  @Input() languageData: Language[] = [];
}
