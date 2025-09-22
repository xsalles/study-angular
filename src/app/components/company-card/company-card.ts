import { Component, Input } from '@angular/core';
import { CompanyCardProps } from '../../interfaces/components/company-card';



@Component({
  selector: 'component-company-card',
  imports: [],
  templateUrl: './company-card.html',
  styleUrl: './company-card.scss'
})
export class CompanyCard {
  @Input() company!: CompanyCardProps;
}
