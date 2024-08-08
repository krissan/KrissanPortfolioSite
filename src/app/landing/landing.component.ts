import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { TitleComponent, TitleType } from '../general/title/title.component';
import { PageLinkComponent } from '../general/pageLink/pageLink.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [TitleComponent, PageLinkComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
  @ViewChild('profileShadow') profileShadow!: ElementRef;
  @ViewChild('profileImage') profileImage!: ElementRef;
  location = { top: 0, left: 0 };
  yearsExperience = new Date().getFullYear() - 2016;

  public TitleType = TitleType;

  //Peg shadow position to profile image
  @HostListener('window:scroll', ['$event'])
  @HostListener('window:resize', ['$event'])
  onWindowChange() {
    this.updateShadowPosition();
  }

  //Update shadow position on initialization
  ngAfterViewInit() {
    this.updateShadowPosition();
  }

  updateShadowPosition() {
    //Get the position of the source element
    if(this.profileImage.nativeElement?.getBoundingClientRect){
      const sourceRect = this.profileImage.nativeElement?.getBoundingClientRect();

      //Set the position of the target element
      this.profileShadow.nativeElement.style.top = `${sourceRect.top - sourceRect.height/3}px`;
      this.profileShadow.nativeElement.style.left = `${sourceRect.left+sourceRect.width/3}px`;
    }
  }
}
