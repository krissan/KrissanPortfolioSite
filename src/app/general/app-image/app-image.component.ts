import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { UtilService } from '../util/util.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app-image.component.html',
  styleUrl: './app-image.component.scss',
  animations: [
    trigger('imgGrow', [
      state('no-hover', style({ transform: 'scale(1)' })),
      state('hover', style({ transform: 'scale(1.05)' })), // Slight expansion
      transition('no-hover <=> hover', [animate('0.25s ease-in-out')]),
    ])
  ]
})
export class AppImageComponent {
  protected imgState: 'hover' | 'no-hover' = 'no-hover';
  @Input() alt!: string;
  @Input() src!: string;

  isModalOpen: boolean = false;

  constructor(public utilService: UtilService) {}

  openModal(): void {
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }
}
