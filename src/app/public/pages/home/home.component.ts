import { Component, OnInit } from '@angular/core';
import {EventApiService} from '../../../registration/services/event-api.service';
import {Event} from '../../../registration/model/event.entity'
import {EventGridComponent} from '../../../registration/components/event-grid/event-grid.component';
import {ToolbarComponent} from '../../components/toolbar/toolbar.component';

/**
 * Home page component
 * @class HomeComponent
 * @description
 * This component serves as the application's home page.
 * It displays a welcome message and a grid of registered events.
 * Event data is fetched from the API service on initialization.
 */
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ToolbarComponent, EventGridComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  /** List of registered events to display */
  registeredEvents: Event[] = [];

  /**
   * Creates an instance of HomeComponent.
   *
   * @param eventApi - The service for fetching event data
   */
  constructor(private eventApi: EventApiService) {}

  /**
   * Initializes the component.
   * Fetches event data from the API service.
   */
  ngOnInit(): void {
    this.eventApi.getAll().subscribe(
      {
        next: (data: any) => {
          this.registeredEvents = data;
        },
        error:(err: any) => {
          console.error('error fetching events', err);
        }
      });
  }
}
