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
  sliderInterval: any;
  portfolioInterval: any;
  isSliderPaused = false;
  isPortfolioPaused = false;
  
  portfolioProjects = [
    {
      title: 'Skill Development HUB Mehidipatnam',
      description: 'We developed a comprehensive website for SD Hub Mehidipatnam featuring course listings, registration forms, and a student portal. The site includes responsive design and SEO optimization to increase visibility for their job-oriented training programs.',
      image: 'sdhub-mp.jpg',
      link: 'https://sdhub.in/',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap' , 'Angular.JS' , 'Node.JS' , 'MySQL']
    },
    {
      title: 'Skill Development HUB Qutubshahi',
      description: 'For SD Hub Qutubshahi, we created a custom website with an integrated course management system, online application process, and mobile-friendly interface. The site features a clean, professional design that highlights their training programs and success stories.',
      image: 'sdhub-qs.jpg',
      link: 'https://sdhubqutubshahi.com/',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap' , 'Angular.JS' , 'Node.JS' , 'MySQL']
    },
    {
      title: 'Aseem India',
      description: 'We built a dynamic platform for ASEEM India that showcases their advocacy work and community initiatives. The site includes a resource library, donation system, and interactive maps showing their impact across communities. The design emphasizes accessibility and information clarity.',
      image: 'Aseem-logo.png',
      link: 'https://aseemindia.org/',
      technologies: ['HTML5', 'CSS3', 'JavaScript' , 'Angular.JS' , 'PHP']
    },
    {
      title: 'Professional Summit',
      description: 'We developed a live streaming platform for the Professionals Summit 2024 with real-time video integration, attendee registration, and interactive session scheduling. The site handles high traffic volumes and includes chat functionality for audience engagement during presentations.',
      image: 'PSF-Summit.png',
      link: 'https://professionalssummit.com/online/',
      technologies: ['HTML5', 'CSS3', 'TypeScript' , 'Angular.JS' , 'PHP']
    },
    {
      title: 'Eiddo Power',
      description: 'For Eiddo Power, we created a modern website showcasing their green energy solutions with interactive infographics explaining their sustainable technologies. The site includes case studies, energy calculators, and a customer portal for monitoring energy usage and savings.',
      image: './Eiddo-Logo.png',
      link: 'https://eiddopower.com/',
      technologies: ['HTML5', 'CSS3', 'JavaScript' , 'Angular.JS' , 'PHP']
    },
    {
      title: 'Speed House Design',
      description: 'We designed and developed a portfolio website for Speed House Design featuring their architectural projects with 3D renderings and virtual tours. The site includes a project gallery, client testimonials, and a custom quote request system for potential clients.',
      image: './Speed-House-logo.png',
      link: 'https://speedhousedesign.com',
      technologies: ['HTML5', 'CSS3', 'JavaScript' , 'Angular.JS' , 'PHP']
    },
    {
      title: 'Lagom Interio',
      description: 'For Lagom Interio, we built an elegant website that showcases their interior design portfolio with high-resolution imagery and project details. The site includes a blog section for design tips, a material library, and a contact form for consultation requests.',
      image: './Lagom-logo.jpg',
      link: 'https://lagominterio.com/',
      technologies: ['HTML5', 'CSS3', 'JavaScript' , 'Angular.JS' , 'PHP']
    },
    {
      title: 'XLNC Contracting',
      description: 'We developed a corporate website for XLNC Contracting that highlights their engineering and construction services. The site features project showcases, team profiles, and a detailed service catalog with case studies demonstrating their expertise in technical services.',
      image: './XLNC-Logo.jpg',
      link: 'https://xlnccontracting.com/',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap']
    },
    {
      title: 'Zikra High School',
      description: "We created an educational website for Zikra High School with features including an online admission system, student portal, event calendar, and curriculum information. The site helps connect parents, students, and teachers while showcasing the school's holistic educational approach.",
      image: './zikra-logo.png',
      link: 'https://zikrahighschool.com/',
      technologies: ['HTML5', 'CSS3', 'JavaScript' , 'Angular.JS' , 'PHP']
    }
  ];

  // Our portfolio project descriptions
  projectDescriptions = [
    {
      title: 'Skill Development HUB Mehidipatnam',
      description: 'We developed a comprehensive website for SD Hub Mehidipatnam featuring course listings, registration forms, and a student portal. The site includes responsive design and SEO optimization to increase visibility for their job-oriented training programs. Our team implemented a custom content management system allowing staff to easily update course information and manage student applications.'
    },
    {
      title: 'Skill Development HUB Qutubshahi',
      description: 'For SD Hub Qutubshahi, we created a custom website with an integrated course management system, online application process, and mobile-friendly interface. The site features a clean, professional design that highlights their training programs and success stories. We implemented advanced search functionality to help prospective students find relevant courses and integrated payment gateways for online fee collection.'
    },
    {
      title: 'Aseem India',
      description: 'We built a dynamic platform for ASEEM India that showcases their advocacy work and community initiatives. The site includes a resource library, donation system, and interactive maps showing their impact across communities. The design emphasizes accessibility and information clarity. Our team implemented a custom donation management system and integrated social media feeds to highlight their ongoing community work.'
    }
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

  pauseSlider() {
    this.isSliderPaused = true;
    if (this.sliderInterval) {
      clearInterval(this.sliderInterval);
    }
  }

  resumeSlider() {
    if (this.isSliderPaused) {
      this.isSliderPaused = false;
      this.startSliderInterval();
    }
  }

  pausePortfolioSlider() {
    this.isPortfolioPaused = true;
    if (this.portfolioInterval) {
      clearInterval(this.portfolioInterval);
    }
  }

  resumePortfolioSlider() {
    if (this.isPortfolioPaused) {
      this.isPortfolioPaused = false;
      this.startPortfolioInterval();
    }
  }

  startSliderInterval() {
    this.sliderInterval = setInterval(() => {
      // Find the currently checked radio button
      const currentRadio = document.querySelector('input[name="slide"]:checked') as HTMLInputElement;
      const currentId = currentRadio.id;
      
      // Determine the next radio button to check
      let nextId;
      switch(currentId) {
        case 'slide1': nextId = 'slide2'; break;
        case 'slide2': nextId = 'slide3'; break;
        case 'slide3': nextId = 'slide4'; break;
        case 'slide4': nextId = 'slide1'; break;
        default: nextId = 'slide1';
      }
      
      // Check the next radio button
      const nextRadio = document.getElementById(nextId) as HTMLInputElement;
      if (nextRadio) {
        nextRadio.checked = true;
      }
    }, 5000); // Change slide every 5 seconds
  }

  startPortfolioInterval() {
    this.portfolioInterval = setInterval(() => {
      this.next();
    }, 7000); // Slides every 5 seconds
  }

  ngOnInit() {
    this.startSliderInterval();
    this.startPortfolioInterval();
  }

  ngOnDestroy() {
    if (this.sliderInterval) {
      clearInterval(this.sliderInterval);
    }
    if (this.portfolioInterval) {
      clearInterval(this.portfolioInterval);
    }
  }
}