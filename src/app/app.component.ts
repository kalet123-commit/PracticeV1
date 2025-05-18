import {Component} from '@angular/core';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';
import {MatToolbar, MatToolbarRow} from '@angular/material/toolbar';

import {MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';

import {CommonModule} from '@angular/common';
import {FooterComponent} from './public/components/footer/footer.component';

import {SidenavComponent} from './public/components/side-navigation-bar/side-navigation-bar.component';

/**
 * Root component of the Eventify application
 * @class AppComponent
 * @description
 * This component serves as the main entry point for the application.
 * It initializes the translation service and sets up the basic layout structure.
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbar,
    MatToolbarRow,
    MatIconButton,
    MatIcon,

    TranslatePipe,

    SidenavComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  /** Application title */
  title = 'eventify';

  /** Navigation menu items */
  options = [
    { path: '/home', title: 'Home' },
    { path: '/engagement/ratings/new', title: 'Rating' }
  ];

  /** Controls the state of the side navigation */
  isSidenavOpen = false;

  /**
   * Creates an instance of AppComponent.
   * Initializes the translation service with English and Spanish languages.
   *
   * @param translate - The translation service for handling internationalization
   */
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en', 'es']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  /**
   * Toggles the side navigation state
   */
  toggleSidenav(): void {
    this.isSidenavOpen = !this.isSidenavOpen;
  }
}
