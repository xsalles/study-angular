import { Component, Input } from '@angular/core';
import { OptionFaqProps } from '../../interfaces/components/option-faq';

@Component({
  selector: 'component-option-faq',
  imports: [],
  templateUrl: './option-faq.html',
  styleUrl: './option-faq.scss',
})
export class OptionFaq {
  @Input() optionFaq!: OptionFaqProps;

  toggle(faq: OptionFaqProps) {
    faq.isOpen = !faq.isOpen;
  }
}
