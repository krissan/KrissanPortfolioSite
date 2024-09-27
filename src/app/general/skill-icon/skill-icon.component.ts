import { Component, Input } from '@angular/core';
import { IconPicker, SanityImage } from '../../../typings';
import { CommonModule } from '@angular/common';
import * as SimpleIcons from 'simple-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconService } from '../icon/icon.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { UtilService } from '../util/util.service';
import { Subject, takeUntil,  } from 'rxjs';

@Component({
  selector: 'skill-icon',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule ],
  templateUrl: './skill-icon.component.html',
  styleUrl: './skill-icon.component.scss',
  animations: [
    trigger('labelAppear',[
      state('no-hover', style({opacity:0, height:'0px'})),
      state('hover', style({opacity:1, height:'100%'})),
      transition('no-hover <=> hover', [animate('1s ease-in-out')])
    ])
  ]
})

export class SkillIconComponent {
  protected labelState: 'hover' | 'no-hover' = 'no-hover'
  @Input() skill: string = '';
  label: string = '';
  icon?: IconPicker | null = null;
  alternative?: SanityImage | null = null;
  //variable for svg when icon is from simple-icon library
  simpleIconSvg: SafeHtml | null = null;
  iconName: string = 'question';
  iconProvider: string = 'fas';
  isLoading: boolean = true;
  private unsubscribe$ = new Subject<void>();

  constructor(private iconService: IconService,  private sanitizer: DomSanitizer, public utilService: UtilService)
  {
  }

  ngOnInit() {
    this.checkLoadingState()
  }

  private checkLoadingState(){
    this.iconService.loadingIcons$
    .pipe(
      takeUntil(this.unsubscribe$)
    )
    .subscribe((loading) => {
      const isIconLoaded = this.iconService.loadedIcons.has(this.skill.toLowerCase());

      this.isLoading = loading;

      if (!loading || isIconLoaded) {
        this.updateIconData();
        this.unsubscribe$.next(); // Emit to complete the subscription
        this.unsubscribe$.complete();
      }
    });
  }

  // Don't forget to handle the cleanup in ngOnDestroy
  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private updateIconData() {
    const item = this.iconService.loadedIcons.get(this.skill.toLowerCase());

    if (item !== undefined) {
      this.icon = item.value;
      this.alternative = item.alternative;
      this.label = item.label;

      this.iconProvider = this.icon?.provider ?? 'fas';

      if (this.icon?.provider === 'fas' || this.icon?.provider === 'fab') {
        this.iconName = this.icon.name;
      } else if (this.icon?.provider === 'si') {
        const iconKey = `si${this.icon.name.charAt(0).toUpperCase() + this.icon.name.slice(1)}`;
        const iconSvg = (SimpleIcons as any)[iconKey]?.svg || null;
        this.simpleIconSvg = iconSvg ? this.sanitizer.bypassSecurityTrustHtml(iconSvg) : null;
      }
    }
  }
}
