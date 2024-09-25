import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { TitleComponent, TitleType } from '../general/title/title.component';
import { PageLinkComponent } from '../general/page-link/page-link.component';
import { LinkButtonComponent } from '../general/link-button/link-button.component';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [TitleComponent, PageLinkComponent, LinkButtonComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
  animations: [
    // Fade in from the left
    trigger('fadeInLeft', [
      state('hidden', style({ opacity: 0, transform: 'translateX(-20vw)' })),
      state('visible', style({ opacity: 1, transform: 'translateX(0)' })),
      transition('hidden => visible', [animate('1s ease-in')])
    ]),

    // Fade in from the right
    trigger('fadeInRight', [
      state('hidden', style({ opacity: 0, transform: 'translateX(20vw)' })),
      state('visible', style({ opacity: 1, transform: 'translateX(0)' })),
      transition('hidden => visible', [animate('1s ease-in')])
    ]),

    // Fade in from the bottom (up)
    trigger('fadeInUp', [
      state('hidden', style({ opacity: 0, transform: 'translateY(100%)' })),
      state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('hidden => visible', [animate('1s ease-in')])
    ])
  ]
})
export class LandingComponent {
  @ViewChild('profileShadow') profileShadow!: ElementRef;
  @ViewChild('profileImage') profileImage!: ElementRef;
  location = { top: 0, left: 0 };
  yearsExperience = new Date().getFullYear() - 2016;
  animationState = 'hidden';
  upAnimationState = 'hidden';

  public TitleType = TitleType;

  @HostListener('window:scroll', ['$event'])
  @HostListener('window:resize', ['$event'])
  onWindowChange() {
    this.updateShadowPosition();
  }

  ngAfterViewInit() {
    this.updateShadowPosition();
    setTimeout(() => {
      this.animationState = 'visible';
    }, 500);
    setTimeout(() => {
      this.upAnimationState = 'visible';
    }, 1000);
  }

  updateShadowPosition() {
    if(this.profileImage.nativeElement?.getBoundingClientRect){
      const sourceRect = this.profileImage.nativeElement?.getBoundingClientRect();

      this.profileShadow.nativeElement.style.top = `${sourceRect.top - sourceRect.height/3}px`;
      this.profileShadow.nativeElement.style.left = `${sourceRect.left+sourceRect.width/3}px`;
    }
  }
}
