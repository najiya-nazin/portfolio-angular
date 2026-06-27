import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  darkMode = signal(true);

  constructor() {

    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
      this.darkMode.set(savedTheme === 'dark');
    }

    this.applyTheme();
  }

  toggleTheme(): void {

    this.darkMode.update(value => !value);

    this.applyTheme();
  }

  private applyTheme(): void {

    if (this.darkMode()) {

      document.body.classList.remove('light-theme');

      localStorage.setItem('theme', 'dark');

    } else {

      document.body.classList.add('light-theme');

      localStorage.setItem('theme', 'light');
    }

  }

}
