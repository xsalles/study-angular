import { Component } from '@angular/core';
import { SecondaryButton } from '../../components/button/secondary-button/secondary-button';

@Component({
  selector: 'first-cta-section',
  imports: [SecondaryButton],
  templateUrl: './first-cta-section.html',
  styleUrl: './first-cta-section.scss',
})
export class FirstCtaSection {}
