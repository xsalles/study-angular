import { Component, Input } from '@angular/core';
import { FeatureProps } from '../../interfaces/components/feature-card';

@Component({
  selector: 'component-feature-card',
  imports: [],
  templateUrl: './feature-card.html',
  styleUrl: './feature-card.scss'
})
export class FeatureCard {
  @Input() feature!: FeatureProps;
}
