import { Component } from '@angular/core';
import { Button } from "../button/button";

@Component({
  selector: 'component-header',
  standalone: true,
  imports: [Button],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

}
