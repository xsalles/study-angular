import { Component, Input } from '@angular/core';

@Component({
  selector: 'component-secondary-button',
  imports: [],
  templateUrl: './secondary-button.html',
  styleUrl: './secondary-button.scss'
})
export class SecondaryButton {
  @Input() text: string = '';
}
