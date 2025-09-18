import { Component } from '@angular/core';
import { ButtonComponent } from "../button/button";

@Component({
  selector: 'component-header',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

}
