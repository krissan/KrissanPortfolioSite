import { Component, Input } from '@angular/core';
import { SideSectionComponent } from '../../general/side-section/side-section.component';
import { Credential } from '../../../typings';
import { TitleComponent, TitleType } from '../../general/title/title.component';
import { SubTitleComponent } from '../../general/sub-title/sub-title.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'credential-section',
  standalone: true,
  imports: [CommonModule, SideSectionComponent, TitleComponent, SubTitleComponent],
  templateUrl: './credential.component.html',
  styleUrl: './credential.component.scss'
})
export class CredentialComponent {
  @Input() credentialData: Credential[] = [];
  @Input() isLoading: boolean = true;

  public TitleType = TitleType;
}
