import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import {Event} from '../../model/event.entity'
import {EventApiService} from '../../services/event-api.service';
import {EventSummaryComponent} from '../event-summary/event-summary.component';
import {MatDividerModule} from '@angular/material/divider';
@Component({
  selector: 'app-event-grid',
  imports: [
    CommonModule,MatGridListModule,EventSummaryComponent,MatDividerModule
  ],
  templateUrl:'./event-grid.component.html',
  styleUrl: './event-grid.component.css'
})
export class EventGridComponent implements OnInit {
  registeredEvents: Event[] = [];

  constructor(private eventApi: EventApiService) {}

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
