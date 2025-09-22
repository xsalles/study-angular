import { Component } from '@angular/core';
import { PrimaryButton } from '../../components/button/primary-button/primary-button';
import { InputComponent } from '../../components/input/input';

@Component({
  selector: 'hero-section',
  imports: [InputComponent, PrimaryButton],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss',
})
export class HeroSection {}
