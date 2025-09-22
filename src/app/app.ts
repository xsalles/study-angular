import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header";
import { HeroSection } from "./template/hero-section/hero-section";
import { PartnershipsSection } from "./template/partnerships-section/partnerships-section";
import { StatsSection } from "./template/stats-section/stats-section";
import { HowWorksSection } from "./template/how-works-section/how-works-section";
import { OurWorkSection } from "./template/our-work-section/our-work-section";
import { FirstCtaSection } from "./template/first-cta-section/first-cta-section";
import { OurTeamSection } from "./template/our-team-section/our-team-section";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeroSection, PartnershipsSection, HeaderComponent, StatsSection, HowWorksSection, OurWorkSection, FirstCtaSection, OurTeamSection],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('landing-page-angular');
}
