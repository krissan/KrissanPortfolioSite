import { Component, Input } from '@angular/core';

export enum TitleType {
  giant = "font-anton uppercase font-black tracking-wide text-6xl	md:text-9xl sm:text-7xl",
  title = "font-anton uppercase font-black tracking-wide text-5xl	md:text-7xl",
  subtitle = "font-anton uppercase font-black tracking-wide text-3xl"
}

@Component({
  selector: 'section-title',
  standalone: true,
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss'
})
export class TitleComponent {
  @Input() textSize: TitleType = TitleType.title;
}
