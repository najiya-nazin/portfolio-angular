import { Component, signal } from '@angular/core';
import { NavbarComponent } from './shared/navbar/navbar';
import { SkillsComponent } from './features/skills/skills';
import { HeroComponent } from './features/hero/hero';
import { AboutComponent } from './features/about/about';
import { ContactComponent } from './features/contact/contact';
import { ProjectsComponent } from './features/projects/projects';
import { FooterComponent } from './shared/footer/footer';
import { ScrollTopComponent } from "./shared/scroll-top/scroll-top";


@Component({
  selector: 'app-root',
  imports: [NavbarComponent, SkillsComponent, HeroComponent, AboutComponent, ContactComponent, ProjectsComponent, FooterComponent, ScrollTopComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');
}
