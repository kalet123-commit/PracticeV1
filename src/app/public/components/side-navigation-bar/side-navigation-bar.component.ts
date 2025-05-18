import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

/**
 * Side navigation component for the application
 * @class SidenavComponent
 * @description
 * This component provides the side navigation functionality for the application.
 * It displays a list of navigation options and contains the main content area.
 */
@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    RouterModule,
    RouterOutlet,
    TranslateModule
  ],
  templateUrl: './side-navigation-bar.component.html',
  styleUrls: ['./side-navigation-bar.component.css']
})
export class SidenavComponent {
  /** Determines whether the sidenav is open or closed */
  @Input() isSidenavOpen = false;

  /** Navigation menu items */
  @Input() options = [
    { path: '/home', title: 'Home' },
    { path: '/engagement/ratings/new', title: 'Rating' }
  ];

  /** Event emitted when the sidenav is closed */
  @Output() sidenavClosed = new EventEmitter<void>();

  /**
   * Closes the sidenav and emits the sidenavClosed event
   */
  closeSidenav(): void {
    this.sidenavClosed.emit();
  }
}
