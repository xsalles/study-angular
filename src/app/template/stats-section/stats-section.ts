import { Component } from '@angular/core';
import { stat } from 'fs';
import { StatsCardComponent } from "../../components/stats-card/stats-card";

@Component({
  selector: 'stats-section',
  imports: [StatsCardComponent],
  templateUrl: './stats-section.html',
  styleUrl: './stats-section.scss',
})
export class StatsSection {
  statsRowOne = [
    { stat: '245%', description: 'More revenues for brand' },
    { stat: '130K+', description: 'Audiences reached ' },
  ];

  statsRowTwo = [
    { stat: '50+', description: 'Brands trust us' },
    { stat: '24+', description: 'Worldwide Awards' },
  ];
}
