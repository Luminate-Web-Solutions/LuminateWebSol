import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('slideAnimation', [
      transition(':increment', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('500ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ]),
      transition(':decrement', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate('500ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ])
    ])
  ]
})
export class HomeComponent {
  currentIndex = 0;
  currentContent: string = 'digitalMarketing';
  portfolioProjects = [
    {
      title: 'Skill Development HUB',
      description: 'SD Hub website is a skills development hub aimed at empowering individuals by offering job-oriented training programs .',
      image: 'sdhub.png',
      link: 'https://sdhub.in/',
    },
    {
      title: 'Professional Summit',
      description: 'The Professionals Summit 2024 website for watching live event online.',
      image: 'PSF-Summit.png',
      link: 'https://professionalssummit.com/online/',
    },
    {
      title: 'Eiddo Power',
      description: 'Luminate Web Solutions is a company offering expert web development services and digital transformation for businesses.',
      image: './Eiddo-Logo.png',
      link: 'https://eiddopower.com/',
    },
    {
      title: 'Speed House Desgin',
      description: 'Luminate Web Solutions is a company offering expert web development services and digital transformation for businesses.',
      image: './Speed-House-logo.png',
      link: 'https://speedhousedesign.com',
    },
    {
      title: 'Lagom Interio',
      description: 'Luminate Web Solutions is a company offering expert web development services and digital transformation for businesses.',
      image: './Lagom-logo.jpg',
      link: 'https://lagominterio.com/',
    },
    {
      title: 'XLNC Contracting',
      description: 'Luminate Web Solutions is a company offering expert web development services and digital transformation for businesses.',
      image: './XLNC-Logo.jpg',
      link: 'https://xlnccontracting.com/',
    },
   
  ];

prev() {
  if (this.currentIndex === 0) {
    this.currentIndex = this.portfolioProjects.length - 1; // Go to last slide
  } else {
    this.currentIndex--;
  }
}

next() {
  if (this.currentIndex === this.portfolioProjects.length - 1) {
    this.currentIndex = 0; // Loop back to first slide
  } else {
    this.currentIndex++;
  }
}

  showContent(contentType: string) {
    this.currentContent = contentType;
  }

  ngOnInit() {
    setInterval(() => {
      this.next();
    }, 5000); // Slides every 3 seconds
  }
}