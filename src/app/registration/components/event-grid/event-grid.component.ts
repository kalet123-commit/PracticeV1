import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import {Event} from '../../model/event.entity'
import {EventApiService} from '../../services/event-api.service';
import {EventSummaryComponent} from '../event-summary/event-summary.component';
import {MatDividerModule} from '@angular/material/divider';

/**
 * Grid display component for events
 * @class EventGridComponent
 * @description
 * This component displays a responsive grid of event summary cards.
 * It fetches event data from the API service and renders them in a grid layout.
 * If no events are found, it displays an appropriate message.
 */
@Component({
  selector: 'app-event-grid',
  imports: [
    CommonModule, MatGridListModule, EventSummaryComponent, MatDividerModule
  ],
  templateUrl:'./event-grid.component.html',
  styleUrl: './event-grid.component.css'
})
export class EventGridComponent implements OnInit {
  /** List of events to display in the grid */
  registeredEvents: Event[] = [];

  /**
   * Creates an instance of EventGridComponent.
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
          console.error('error fetching events',err);
        }
      });
  }
}
