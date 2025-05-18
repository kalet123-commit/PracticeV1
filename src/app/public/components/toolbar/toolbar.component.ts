import { Component } from '@angular/core';
import {LanguageSwitcherComponent} from '../language-switcher/language-switcher.component';
import {MatAnchor} from '@angular/material/button';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {MatToolbar} from '@angular/material/toolbar';
import {LogoApiService} from '../../../shared/services/logo-api.service';

@Component({
  selector: 'app-toolbar',
  imports: [
    LanguageSwitcherComponent,
    MatAnchor,
    RouterLink,
    RouterLinkActive,
    MatToolbar
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {
  logoUrl: string;
  constructor(private logoService: LogoApiService){
    this.logoUrl = this.logoService.getLogoUrl('Eventify.com');
  }
}
