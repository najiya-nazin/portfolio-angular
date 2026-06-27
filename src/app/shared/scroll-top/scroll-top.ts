import { Component, HostListener } from '@angular/core';
import { Scroll } from '../../core/services/scroll';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scroll-top',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scroll-top.html',
  styleUrls: ['./scroll-top.scss']
})
export class ScrollTopComponent {

  showButton = false;

  constructor(private scrollService: Scroll) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showButton = window.scrollY > 200;
  }

  scrollTop() {
    this.scrollService.scrollToTop();
  }
}








