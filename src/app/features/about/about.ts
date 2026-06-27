import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrls: ['./about.scss']
})
export class AboutComponent {

  cards = [

    {
      icon: 'fas fa-user-graduate',
      title: 'Education',
      heading: 'BCA',
      description: "St. Mary's College\nCalicut University"
    },

    {
      icon: 'fas fa-laptop-code',
      title: 'Current Stack',
      heading: 'Python • Django • Angular',
      description: 'REST API • PostgreSQL • Git'
    },

    {
      icon: 'fas fa-map-marker-alt',
      title: 'Location',
      heading: 'Kerala, India',
      description: 'Open to opportunities'
    },

    {
      icon: 'fas fa-code',
      title: 'Experience',
      heading: 'Python Full-Stack Internship',
      description: 'Febno Technologies'
    }

  ];

}
