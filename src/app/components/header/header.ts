import { Component } from '@angular/core';
import { PrimaryButton } from '../button/primary-button/primary-button';

@Component({
  selector: 'component-header',
  imports: [ PrimaryButton],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class HeaderComponent {}
