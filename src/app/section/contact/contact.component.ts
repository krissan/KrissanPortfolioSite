import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TitleComponent } from '../../general/title/title.component';

@Component({
  selector: 'contact-section',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    trigger('buttonGrow', [
      state('no-hover', style({ transform: 'scale(1)' })),
      state('hover', style({ transform: 'scale(1.05)' })), // Slight expansion
      transition('no-hover <=> hover', [animate('0.25s ease-in-out')]),
    ]),

    trigger('labelAppear', [
      state('no-hover', style({ opacity: 0 })),
      state('hover', style({ opacity: 1 })),
      transition('no-hover <=> hover', [animate('0.25s ease-in-out')]),
    ]),
  ]
})
export class ContactComponent {
  protected buttonState: 'hover' | 'no-hover' = 'no-hover';

  openEmail() {
    window.location.href = 'mailto:krissan32@gmail.com';
  }
}
