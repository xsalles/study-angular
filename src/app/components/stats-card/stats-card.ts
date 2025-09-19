import { Component, Input } from '@angular/core';

@Component({
  selector: 'component-stats-card',
  imports: [],
  templateUrl: './stats-card.html',
  styleUrl: './stats-card.scss'
})
export class StatsCardComponent {
  @Input() stat: string = '';
  @Input() description: string = '';
}
