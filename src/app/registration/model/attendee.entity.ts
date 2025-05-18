export class Attendee {
  /** Unique identifier for the attendee */
  id: number;

  /** First name of the attendee */
  firstName: string;

  /** Last name of the attendee */
  lastName: string;

  /** ID of the event the attendee is registered for */
  eventId: number;

  /** Unique ticket identifier for the attendee */
  ticketIdentifier: number;

  /** Timestamp when the attendee checked in (empty if not checked in) */
  checkedInAt: string;

  /**
   * Creates a new Attendee instance
   * @param attendee - Initial attendee properties
   */
  constructor(attendee: {id?: number, firstName?: string, lastName?: string, eventId?: number, ticketIdentifier?: number, checkedInAt?: string}) {
    this.id = attendee.id || 0;
    this.firstName = attendee.firstName || '';
    this.lastName = attendee.lastName || '';
    this.eventId = attendee.eventId || 0;
    this.ticketIdentifier = attendee.ticketIdentifier || 0;
    this.checkedInAt = attendee.checkedInAt || '';
  }
}
