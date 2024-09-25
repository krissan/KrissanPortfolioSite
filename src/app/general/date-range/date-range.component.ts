import { Component, Input } from '@angular/core';

@Component({
  selector: 'date-range',
  standalone: true,
  imports: [],
  templateUrl: './date-range.component.html',
  styleUrl: './date-range.component.scss'
})
export class DateRangeComponent {
  @Input() startDate!: string;
  @Input() endDate!: string;
  dateRangeText:string = "";

  ngOnInit(){
    const startDate = new Date(this.startDate);
    const endDate = new Date(this.endDate);
    const startMonth = startDate.toLocaleString('default', { month: 'short' });
    const endMonth = endDate.toLocaleString('default', { month: 'short' });
    const startYear = startDate.getFullYear();
    const endYear = endDate.getFullYear();
    this.dateRangeText = (startMonth+" "+startYear+" - "+endMonth+" "+endYear).toUpperCase()
  }
}
