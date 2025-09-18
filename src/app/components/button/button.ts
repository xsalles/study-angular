import { Component, Input } from '@angular/core';

@Component({
  selector: 'component-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class ButtonComponent {
  @Input() text: string = '';
}
