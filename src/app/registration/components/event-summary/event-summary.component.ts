import {Component, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {AttendeeApiService} from '../../services/attendee-api.service';
import {RatingApiService} from '../../../engagement/services/rating-api.service';
import {Attendee} from '../../model/attendee.entity';
import {Rating} from '../../../engagement/model/rating.entity';
import {TranslatePipe} from '@ngx-translate/core';

/**
 * Component for displaying summary information about an event
 * @class EventSummaryComponent
 * @description
 * This component renders a card with event details, including name, description,
 * number of checked-in attendees, and average rating. It fetches related
 * attendee and rating data to calculate these statistics.
 */
@Component({
  selector: 'app-event-summary',
  standalone: true,
  imports: [CommonModule, MatCardModule, TranslatePipe],
  templateUrl: './event-summary.component.html',
  styleUrl: './event-summary.component.css'
})
export class EventSummaryComponent implements OnInit {
  /** The event data to display */
  @Input() event!: { id: number; name: string; description: string };

  /** List of attendees for this event */
  attendees: Attendee[] = [];

  /** List of ratings for this event */
  ratings: Rating[] = [];

  /** Number of checked-in attendees */
  checkedInCount: number = 0;

  /** Average rating for the event */
  averageRating: number = 0;

  /**
   * Creates an instance of EventSummaryComponent.
   *
   * @param attendeeApi - The service for attendee data operations
   * @param ratingApi - The service for rating data operations
   */
  constructor(
    private attendeeApi: AttendeeApiService,
    private ratingApi: RatingApiService
  ) {}

  /**
   * Initializes the component.
   * Loads statistics for the event.
   */
  ngOnInit(): void {
    this.loadStats();
  }

  /**
   * Loads and calculates event statistics.
   * Fetches attendee and rating data to calculate check-in counts and average rating.
   * @private
   */
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
