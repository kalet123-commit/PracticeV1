import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BaseFormComponent} from '../../../shared/components/base-form.component';
import { AttendeeApiService} from '../../../registration/services/attendee-api.service';
import { RatingApiService } from '../../services/rating-api.service';
import { Rating } from '../../model/rating.entity';

@Component({
  selector: 'app-add-rating',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-rating.component.html',
  styleUrl: './add-rating.component.css'
})
export class AddRatingComponent extends BaseFormComponent implements OnInit {
  form!: FormGroup;
  message: string = '';

  constructor(
    private fb: FormBuilder,
    private attendeeApi: AttendeeApiService,
    private ratingApi: RatingApiService
  ) {
    super();
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      ticketIdentifier: ['', [Validators.required]],
      rating: [null, [Validators.required, Validators.min(1), Validators.max(5)]]
    });
  }

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
        this.message = 'Invalid Ticket Identifier';
        return;
      }

      if (!attendee.checkedInAt || attendee.checkedInAt === '') {
        this.message = 'You can only rate events you have attended to';
        return;
      }

      this.ratingApi.getAll().subscribe(ratings => {
        const alreadyRated = ratings.some(
          r => r.attendeeId === attendee.id && r.eventId === attendee.eventId
        );

        if (alreadyRated) {
          this.message = 'You have already rated this event';
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
          this.message = 'Event successfully rated';
          this.form.reset();
        });
      });
    });
  }
}



