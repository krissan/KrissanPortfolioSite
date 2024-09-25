import { Component, Input } from '@angular/core';

@Component({
  selector: 'page-link',
  standalone: true,
  imports: [],
  templateUrl: './page-link.component.html',
  styleUrl: './page-link.component.scss'
})
export class PageLinkComponent {
  @Input() sectionId: string = '';

  scrollToSection() {
    const section = document.getElementById(this.sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
