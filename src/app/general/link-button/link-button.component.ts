import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'link-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './link-button.component.html',
  styleUrl: './link-button.component.scss',
  animations: [
    trigger('buttonGrow', [
      state('no-hover', style({ transform: 'scale(1)' })),
      state('hover', style({ transform: 'scale(1.05)' })), // Slight expansion
      transition('no-hover <=> hover', [animate('0.25s ease-in-out')]),
    ]),
  ]
})
export class LinkButtonComponent {
  @Input() link!:string;
  @Input() color:string = "red";
  protected buttonState: 'hover' | 'no-hover' = 'no-hover';
}
