import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { BaseFormComponent } from '../../../shared/components/base-form.component';
import { AttendeeApiService } from '../../../registration/services/attendee-api.service';
import { RatingApiService } from '../../services/rating-api.service';
import { Rating } from '../../model/rating.entity';

/**
 * Component for adding ratings to events
 * @class AddRatingComponent
 * @description
 * This component provides a form for users to rate events they have attended.
 * It validates ticket identifiers, checks for attendance, and prevents duplicate ratings.
 * @extends BaseFormComponent
 */
@Component({
  selector: 'app-add-rating',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TranslateModule],
  templateUrl: './add-rating.component.html',
  styleUrl: './add-rating.component.css'
})
export class AddRatingComponent extends BaseFormComponent implements OnInit {
  /** The form group for rating submission */
  form!: FormGroup;

  /** Message to display to the user (success/error) */
  message: string = '';

  /**
   * Creates an instance of AddRatingComponent.
   *
   * @param fb - The form builder service
   * @param attendeeApi - The service for attendee data operations
   * @param ratingApi - The service for rating data operations
   * @param translate - The translation service
   */
  constructor(
    private fb: FormBuilder,
    private attendeeApi: AttendeeApiService,
    private ratingApi: RatingApiService,
    private translate: TranslateService
  ) {
    super();
  }

  /**
   * Initializes the component.
   * Sets up the form with validation rules.
   */
  ngOnInit(): void {
    this.form = this.fb.group({
      ticketIdentifier: ['', [Validators.required]],
      rating: [null, [Validators.required, Validators.min(1), Validators.max(5)]]
    });
  }

  /**
   * Submits the rating form.
   * Validates the ticket, checks attendance status, and prevents duplicate ratings.
   */
  rateEvent(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const ticketIdentifier = +this.form.value.ticketIdentifier;
    const rating = +this.form.value.rating;

    this.attendeeApi.getAll().subscribe(attendees => {
      const attendee = attendees.find(a => a.ticketIdentifier === ticketIdentifier);

      if (!attendee) {
        this.message = this.translate.instant('RATING.ERROR.INVALID_TICKET');
        return;
      }

      if (!attendee.checkedInAt || attendee.checkedInAt === '') {
        this.message = this.translate.instant('RATING.ERROR.NOT_ATTENDED');
        return;
      }

      this.ratingApi.getAll().subscribe(ratings => {
        const alreadyRated = ratings.some(
          r => r.attendeeId === attendee.id && r.eventId === attendee.eventId
        );

        if (alreadyRated) {
          this.message = this.translate.instant('RATING.ERROR.ALREADY_RATED');
          return;
        }

        const newRating: Rating = {
          id: 0,
          attendeeId: attendee.id,
          eventId: attendee.eventId,
          rating,
          ratedAt: new Date().toISOString()
        };

        this.ratingApi.create(newRating).subscribe(() => {
          this.message = this.translate.instant('RATING.SUCCESS');
          this.form.reset();
        });
      });
    });
  }
}
