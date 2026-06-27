import {
  Component,
  AfterViewInit,
  OnDestroy
} from '@angular/core';

import { CommonModule } from '@angular/common';

import Typed from 'typed.js';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrls: ['./hero.scss']
})
export class HeroComponent
implements AfterViewInit, OnDestroy {

  private typed!: Typed;

  ngAfterViewInit(): void {

    this.typed = new Typed('#typed-text', {

      strings: [

        'Python Full-Stack Developer',

        'Frontend Developer',

        'Backend Developer',

        'Angular Developer',

        'Django Developer'

      ],

      typeSpeed: 70,

      backSpeed: 40,

      backDelay: 1800,

      startDelay: 300,

      loop: true,

      smartBackspace: true,

      showCursor: true,

      cursorChar: '|'

    });

  }

  ngOnDestroy(): void {

    this.typed.destroy();

  }

}
