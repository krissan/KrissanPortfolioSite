import { Component, Input } from '@angular/core';
import { SideSectionComponent } from '../../general/side-section/side-section.component';
import { Language } from '../../../typings';
import { TitleComponent, TitleType } from '../../general/title/title.component';
import { SubTitleComponent } from '../../general/sub-title/sub-title.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'language-section',
  standalone: true,
  imports: [SideSectionComponent, TitleComponent, SubTitleComponent, CommonModule],
  templateUrl: './language.component.html',
  styleUrl: './language.component.scss'
})
export class LanguageComponent {
  @Input() languageData: Language[] = [];
  @Input() isLoading: boolean = true;

  public TitleType = TitleType;
}
