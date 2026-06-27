import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class ProjectsComponent {

  projects = [

     {
    title: 'SurgiTrace',
    image: 'assets/surgitrace.png',
    tech: ['Django', 'DRF', 'YOLO', 'Gemma AI'],
    description:
      'Built an AI‑powered surgical video analysis platform that automatically detects key events in surgical recordings and generates intelligent medical summaries. Enhanced hospital workflows with secure role‑based access, audit logging and scalable background processing — reducing manual reporting time and improving accuracy in clinical documentation.',
    // github: '#',
    // demo: '#'
  },
  {
    title: 'DriveInsight',
    image: 'assets/driveinsight.jpeg',
    tech: ['Angular', 'TypeScript','RxJS','Chart.js'],
    description:
      'Designed and developed a responsive analytics dashboard for car sales management. Delivered advanced filtering, authentication, CRUD operations, and interactive charts with real‑time visualization. Empowered dealerships to make data‑driven decisions faster, improving operational efficiency and sales insights.',
    // github: '#',
    // demo: '#'
  },

  {
    title: 'Cipher Core',
    image: 'assets/ciphercore.jpeg',
    tech: ['Python', 'MySQL' ,'Cryptography', 'ABE'],
    description:
      'Developed a secure cloud storage platform leveraging Attribute‑Based Encryption (ABE) and anonymous authentication. Implemented fine‑grained permissions, role‑based accessan d confidential file sharing. Strengthened data security and compliance, enabling organizations to share sensitive information with confidence.',
    // github: '#',
    // demo: '#'
  }
];
}

