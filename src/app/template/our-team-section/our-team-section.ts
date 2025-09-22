import { Component } from '@angular/core';
import { PrimaryButton } from "../../components/button/primary-button/primary-button";
import { OurTeam } from "../../components/our-team/our-team";

@Component({
  selector: 'our-team-section',
  imports: [PrimaryButton, OurTeam],
  templateUrl: './our-team-section.html',
  styleUrl: './our-team-section.scss'
})
export class OurTeamSection {

}
