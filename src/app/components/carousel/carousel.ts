import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { FeedbackProps } from '../../interfaces/components/feedback-card';
import { FeedbackCard } from "../feedback-card/feedback-card";

@Component({
  selector: 'component-carousel',
  imports: [CarouselModule, FeedbackCard],
  templateUrl: './carousel.html',
  styleUrl: './carousel.scss',
})
export class Carousel {
  feedbacks: FeedbackProps[] = [
    {
      name: 'Amelia Joseph',
      position: 'Chief Manager',
      img: '../../../assets/icons/Amelia.svg',
      feedback:
        'My vision came alive effortlessly. Their blend of casual and professional approach made the process a breeze. Creativity flowed, and the results were beyond my expectations.',
    },
    {
      name: 'Jacob Joshua',
      position: 'Chief Manager',
      img: '../../../assets/icons/Jacob.svg',
      feedback:
        "I found the digital expertise I needed. Their creative-professional balance exceeded expectations. Friendly interactions, exceptional outcomes. For digital enchantment, it's got to be Embrace!",
    },
    {
      name: 'John Doe',
      position: 'Chief Manager',
      img: '../../../assets/icons/John.svg',
      feedback:
        "Embrace really nails it! Creative brilliance, approachable style. They're the partners you want—artistry meets strategy. Thrilled with what they achieved!",
    },
  ];
}
