import { Component, Input } from '@angular/core';
import { OptionFaqProps } from '../../interfaces/components/option-faq';
import { OptionFaq } from "../option-faq/option-faq";

@Component({
  selector: 'component-faq',
  imports: [OptionFaq],
  templateUrl: './faq.html',
  styleUrl: './faq.scss',
})
export class Faq {
  optionsFaq: OptionFaqProps[] = [
    {
      question: 'How do I sign up for the project?',
      answer:
        "You can sign up by clicking the 'Get Started' button on the homepage and filling out the registration form.",
      isOpen: false,
    },
    {
      question: 'What is the cost of using the service?',
      answer:
        'Our service is free to use for basic features. We also offer premium plans with additional features at a monthly subscription fee.',
      isOpen: false,
    },
    {
      question: 'How can I contact customer support?',
      answer:
        "You can reach our customer support team via the 'Contact Us' page, where you can submit a form or find our support email and phone number.",
      isOpen: false,
    },
  ];
}
