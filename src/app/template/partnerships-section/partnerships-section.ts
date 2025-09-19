import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'partnerships-section',
  imports: [CommonModule],
  templateUrl: './partnerships-section.html',
  styleUrl: './partnerships-section.scss'
})
export class PartnershipsSection {
  companiesRowOne = [
    {
      name: "Spotify",
      logo: "/assets/icons/Spotify.svg"
    },
    {
      name: "Google",
      logo: "/assets/icons/Google.svg"
    },
    {
      name: "Uber",
      logo: "/assets/icons/Uber.svg"
    },
    {
      name: "Microsoft",
      logo: "/assets/icons/Microsoft.svg"
    },
    {
      name: "Shopify",
      logo: "/assets/icons/Shopify.svg"
    }
  ]

  companiesRowTwo = [
    {
      name: "Evernote",
      logo: "/assets/icons/Evernote.svg"
    },
    {
      name: "Adobe",
      logo: "/assets/icons/Adobe.svg"
    },
    {
      name: "Paypal",
      logo: "/assets/icons/Paypal.svg"
    },
    {
      name: "Amazon",
      logo: "/assets/icons/Amazon.svg"
    },
    {
      name: "Asana",
      logo: "/assets/icons/Asana.svg"
    }
  ]
}
