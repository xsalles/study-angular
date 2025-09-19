import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { HeroSection } from "./template/hero-section/hero-section";
import { PartnershipsSection } from "./template/partnerships-section/partnerships-section";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, HeroSection, PartnershipsSection],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('landing-page-angular');
}
