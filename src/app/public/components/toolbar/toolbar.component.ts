import { Component } from '@angular/core';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component';
import { MatAnchor } from '@angular/material/button';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatToolbar } from '@angular/material/toolbar';
import { LogoApiService } from '../../../shared/services/logo-api.service';
import { TranslateModule } from '@ngx-translate/core';

/**
 * Toolbar component for the application
 * @class ToolbarComponent
 * @description
 * This component displays a toolbar with navigation links, logo, and language switcher.
 * It provides navigation capabilities and visual indication of the active route.
 */
@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    LanguageSwitcherComponent,
    MatAnchor,
    RouterLink,
    RouterLinkActive,
    MatToolbar,
    TranslateModule
  ],
  templateUrl:'./toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {
  /** URL for the logo image */
  logoUrl: string;

  /**
   * Creates an instance of ToolbarComponent.
   * Fetches the logo URL from the logo service.
   *
   * @param logoService - The service that provides logo URLs
   */
  constructor(private logoService: LogoApiService){
    this.logoUrl = this.logoService.getLogoUrl('Eventify.com');
  }
}

