import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrls: ['./skills.scss']
})
export class SkillsComponent {

  skills = [
    { name: 'Python', icon: 'fab fa-python' },
    { name: 'Django', icon: 'fas fa-code' },
    { name: 'Angular', icon: 'fab fa-angular' },
    { name: 'HTML5', icon: 'fab fa-html5' },
    { name: 'CSS3', icon: 'fab fa-css3-alt' },
    { name: 'JavaScript', icon: 'fab fa-js' },
    { name: 'TypeScript', icon: 'fas fa-file-code'},
    { name: 'Bootstrap', icon: 'fab fa-bootstrap' },
    { name: 'Git', icon: 'fab fa-git-alt' },
    { name: 'SQL', icon: 'fas fa-database' },

  ];

}
