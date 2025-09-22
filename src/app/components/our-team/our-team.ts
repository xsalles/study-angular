import { Component } from '@angular/core';

export interface OurTeamProps {
  womans: {
    img: string;
  }[];
  mans: {
    img: string;
  }[];
}

@Component({
  selector: 'component-our-team',
  imports: [],
  templateUrl: './our-team.html',
  styleUrl: './our-team.scss'
})
export class OurTeam {
  ourTeam: OurTeamProps = {
    womans: [
      {
        img: '../../../assets/illustrations/first-woman.png' 
      },
      {
        img: '../../../assets/illustrations/second-woman.png'
      },
      {
        img: '../../../assets/illustrations/third-woman.png'
      }
    ],
    mans: [
      {
        img: '../../../assets/illustrations/first-man.png'
      },
      {
        img: '../../../assets/illustrations/second-man.png'
      },
      {
        img: '../../../assets/illustrations/third-man.png'
      }
    ]
  }
}
