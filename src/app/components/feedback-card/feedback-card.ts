import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { FeedbackProps } from '../../interfaces/components/feedback-card';

@Component({
  selector: 'component-feedback-card',
  imports: [CardModule],
  templateUrl: './feedback-card.html',
  styleUrl: './feedback-card.scss',
})
export class FeedbackCard {
  @Input() feedback!: FeedbackProps;
}
