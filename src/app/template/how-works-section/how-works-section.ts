import { Component } from '@angular/core';
import { FeatureProps } from '../../interfaces/components/feature-card';
import { FeatureCard } from "../../components/feature-card/feature-card";

@Component({
  selector: 'how-works-section',
  imports: [FeatureCard],
  templateUrl: './how-works-section.html',
  styleUrl: './how-works-section.scss',
})
export class HowWorksSection {
  features: FeatureProps[] = [
    {
      title: 'Discovery',
      description:
        'We meet with you to learn about your business, your goals, and your target audience.',
      imageUrl: '../../../assets/icons/heroicons-solid_lightning-bolt.svg',
    },
    {
      title: 'Strategy',
      description:
        'We develop a customized marketing strategy that is based on your unique needs and goals.',
      imageUrl: '../../../assets/icons/fluent_chess-20-filled.svg',
    },
    {
      title: 'Execution',
      description:
        'We execute our strategy using the latest digital marketing tools and techniques.',
      imageUrl: '../../../assets/icons/fluent_target-arrow-16-filled.svg',
    },
    {
      title: 'Measurement',
      description:
        'We track the results of our campaigns so that we can make adjustments as needed.',
      imageUrl: '../../../assets/icons/ph_ruler-fill.svg',
    },
  ];
}
