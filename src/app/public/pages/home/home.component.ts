import { Component,OnInit } from '@angular/core';
import {EventApiService} from '../../../registration/services/event-api.service';
import {Event} from '../../../registration/model/event.entity'
import {EventGridComponent} from '../../../registration/components/event-grid/event-grid.component';
import {ToolbarComponent} from '../../components/toolbar/toolbar.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ToolbarComponent,EventGridComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
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
