export class Rating {
  /** Unique identifier for the rating */
  id: number;

  /** ID of the attendee who submitted this rating */
  attendeeId: number;

  /** ID of the event that was rated */
  eventId: number;

  /** Numeric rating value (typically 1-5) */
  rating: number;

  /** Timestamp when the rating was submitted */
  ratedAt: string;

  /**
   * Creates a new Rating instance
   * @param rating - Initial rating properties
   */
  constructor(rating: {id?: number, attendeeId?: number, eventId?: number, rating?: number, ratedAt?: string}) {
    this.id = rating.id || 0;
    this.attendeeId = rating.attendeeId || 0;
    this.eventId = rating.eventId || 0;
    this.rating = rating.rating || 0;
    this.ratedAt = rating.ratedAt || '';
  }
}
