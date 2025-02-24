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
      title: 'Skill Development HUB Mehidipatnam',
      description: 'SD Hub Mehidipatnam is a skills development hub aimed at empowering individuals by offering job-oriented training programs .',
      image: 'sdhub-mp.jpg',
      link: 'https://sdhub.in/',
    },
    {
      title: 'Skill Development HUB Qutubshahi',
      description: 'SD Hub Qutubshahi is a skills development hub aimed at empowering individuals by offering job-oriented training programs .',
      image: 'sdhub-qs.jpg',
      link: 'https://sdhub.in/',
    },
    {
      title: 'Aseem India',
      description: 'ASEEM engages in advocacy / legal interventions, action research and empowerment of grass roots organizations and social workers in the Muslim Community to enable marginalized community to access government development programmes/ schemes and collectively demand, access and avail their rights from the government agencies.',
      image: 'Aseem-logo.png',
      link: 'https://professionalssummit.com/online/',
    },
    {
      title: 'Professional Summit',
      description: 'The Professionals Summit 2024 website for watching live event online.',
      image: 'PSF-Summit.png',
      link: 'https://aseemindia.org/',
    },
    {
      title: 'Eiddo Power',
      description: 'Eiddo Power is a green power company ehich aims to lead the transition toward a cleaner, greener future by delivering innovative and sustainable energy solutions. ',
      image: './Eiddo-Logo.png',
      link: 'https://eiddopower.com/',
    },
    {
      title: 'Speed House Desgin',
      description: 'Speed House Desgin is a leading architectural designing company based in Dubai.',
      image: './Speed-House-logo.png',
      link: 'https://speedhousedesign.com',
    },
    {
      title: 'Lagom Interio',
      description: 'Lagom Interio is an interior desgin company that designs spaces that are perfectly balanced and functional, yet still beautiful and inviting. "lagom," the Swedish philosophy of "just the right amount."',
      image: './Lagom-logo.jpg',
      link: 'https://lagominterio.com/',
    },
    {
      title: 'XLNC Contracting',
      description: 'XLNC Contracting, established in Dubai in 2015, is a technical services company specializing in engineering solutions, including construction, fit-out works, and maintenance services, with a team bringing over 15 years of experience.',
      image: './XLNC-Logo.jpg',
      link: 'https://xlnccontracting.com/',
    },
    {
      title: 'Zikra High School',
      description: 'Zikra High School, established in 1983 in Hyderabad, is a co-educational institution managed by the Islamic Social Service Society, offering a holistic curriculum that emphasizes leadership, computer literacy, arts, and sports to prepare students as contributors to society.',
      image: './zikra-logo.png',
      link: 'https://zikrahighschool.com/',
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
    }, 7000); // Slides every 3 seconds
  }
}