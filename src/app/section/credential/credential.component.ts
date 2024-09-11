import { Component, Input } from '@angular/core';
import { SideSectionComponent } from '../../general/side-section/side-section.component';
import { Credential } from '../../../typings';

@Component({
  selector: 'credential-section',
  standalone: true,
  imports: [SideSectionComponent],
  templateUrl: './credential.component.html',
  styleUrl: './credential.component.scss'
})
export class CredentialComponent {
  @Input() credentialData: Credential[] = [];
}
