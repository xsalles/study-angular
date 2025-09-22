import { Component, Input } from '@angular/core';

@Component({
  selector: 'component-primary-button',
  imports: [],
  templateUrl: './primary-button.html',
  styleUrl: './primary-button.scss',
})
export class PrimaryButton {
  @Input() text: string = '';
}
