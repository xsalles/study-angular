import { Component } from '@angular/core';
import { Faq } from "../../components/faq/faq";
import { InputComponent } from "../../components/input/input";
import { PrimaryButton } from "../../components/button/primary-button/primary-button";

@Component({
  selector: 'faq-section',
  imports: [Faq, InputComponent, PrimaryButton],
  templateUrl: './faq-section.html',
  styleUrl: './faq-section.scss'
})
export class FaqSection {

}
