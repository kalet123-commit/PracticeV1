import {Component, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {AttendeeApiService} from '../../services/attendee-api.service';
import {RatingApiService} from '../../../engagement/services/rating-api.service';
import {Attendee} from '../../model/attendee.entity';
import {Rating} from '../../../engagement/model/rating.entity';

@Component({
  selector: 'app-event-summary',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './event-summary.component.html',
  styleUrl: './event-summary.component.css'
})

export class EventSummaryComponent implements OnInit {
  @Input() event!: { id: number; name: string; description: string };

  attendees: Attendee[] = [];
  ratings: Rating[] = [];

  checkedInCount: number = 0;
  averageRating: number = 0;

  constructor(
    private attendeeApi: AttendeeApiService,
    private ratingApi: RatingApiService
  ) {}

  ngOnInit(): void {
    this.loadStats();
  }

  private loadStats(): void {

    this.attendeeApi.getAll().subscribe((allAttendees) => {
      this.attendees = allAttendees.filter(a => a.eventId === this.event.id);
      this.checkedInCount = this.attendees.filter(a => a.checkedInAt && a.checkedInAt !== '').length;
    });


    this.ratingApi.getAll().subscribe((allRatings) => {
      this.ratings = allRatings.filter(r => r.eventId === this.event.id);
      const validRatings = this.ratings.map(r => r.rating).filter(r => !isNaN(r));
      const sum = validRatings.reduce((acc, r) => acc + r, 0);
      this.averageRating = validRatings.length ? +(sum / validRatings.length).toFixed(2) : 0;
    });
  }
}
