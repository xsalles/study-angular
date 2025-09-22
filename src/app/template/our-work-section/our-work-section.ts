import { Component } from '@angular/core';
import { PrimaryButton } from '../../components/button/primary-button/primary-button';
import { CompanyCardProps } from '../../interfaces/components/company-card';
import { CompanyCard } from '../../components/company-card/company-card';

@Component({
  selector: 'our-work-section',
  imports: [CompanyCard, PrimaryButton],
  templateUrl: './our-work-section.html',
  styleUrl: './our-work-section.scss',
})
export class OurWorkSection {
  companyCards: CompanyCardProps[] = [
    {
      name: 'Apple',
      logo: '../../../assets/illustrations/Apple.png',
    },
    {
      name: 'Coke',
      logo: '../../../assets/illustrations/Coke.png',
    },
    {
      name: 'Nike',
      logo: '../../../assets/illustrations/Nike.png',
    },
  ];
}
