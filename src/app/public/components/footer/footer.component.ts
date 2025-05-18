import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MatToolbar } from '@angular/material/toolbar';

/**
 * Footer component for the application
 * @class FooterComponent
 * @description
 * This component displays a footer at the bottom of the application with copyright information,
 * privacy policy, terms of service, and contact links.
 */
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    MatToolbar
  ],
  templateUrl:'./footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  /** The current year for copyright display */
  currentYear: number = new Date().getFullYear();
}
