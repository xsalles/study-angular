import { Component } from '@angular/core';
import { ButtonComponent } from "../../components/button/button";
import { InputComponent } from "../../components/input/input";

@Component({
  selector: 'hero-section',
  imports: [ButtonComponent, InputComponent],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss'
})
export class HeroSection {

}
