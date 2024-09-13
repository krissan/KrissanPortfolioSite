import { Component, Input, SimpleChanges } from '@angular/core';
import { IconPicker, SanityImage } from '../../../typings';
import { CommonModule } from '@angular/common';
import * as SimpleIcons from 'simple-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconService } from '../icon/icon.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { environment } from '../../../environments/environment.prod';

@Component({
  selector: 'skill-icon',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule ],
  templateUrl: './skill-icon.component.html',
  styleUrl: './skill-icon.component.scss'
})
export class SkillIconComponent {
  @Input() label: string = '';
  @Input() icon?: IconPicker | null = null;
  @Input() alternative?: SanityImage | null = null;
  //variable for svg when icon is from simple-icon library
  simpleIconSvg: SafeHtml | null = null;
  iconName: string = 'question';
  iconPrefix: string = 'fas';
  constructor(private iconService: IconService,  private sanitizer: DomSanitizer)
  {
  }

  ngOnChanges(changes: SimpleChanges) {
    //set iconName for font awesome icons
    const iconDict = this.iconService.loadedIcons;
    if (this.icon?.provider === 'fa') {
      this.iconName = iconDict.get(this.icon.name)?.iconName ?? "question";
      this.iconPrefix = iconDict.get(this.icon.name)?.prefix ?? "fas";
    }
    else if (this.icon?.provider === 'si') {
      const iconKey = `si${this.icon.name.charAt(0).toUpperCase() + this.icon.name.slice(1)}`;
      const iconSvg = (SimpleIcons as any)[iconKey]?.svg || null;
      this.simpleIconSvg = iconSvg ? this.sanitizer.bypassSecurityTrustHtml(iconSvg) : null;
    }
  }

  // Construct the Sanity image URL from the asset reference.
  getSanityImageUrl(imageRef: string): string {
    const imageUrl = imageRef.slice(6,-4);
    return `https://cdn.sanity.io/images/${environment.sanityProjectId}/${environment.dataset}/${imageUrl}.svg`;
  }
}
