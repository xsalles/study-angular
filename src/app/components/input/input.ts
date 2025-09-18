import { Component, Input } from '@angular/core';

@Component({
  selector: 'component-input',
  imports: [],
  templateUrl: './input.html',
  styleUrl: './input.scss'
})
export class InputComponent {
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
}
