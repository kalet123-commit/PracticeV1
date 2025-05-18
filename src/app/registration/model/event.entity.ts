// 6. Event Entity Documentation
export class Event {
  /** Unique identifier for the event */
  id: number;

  /** Name of the event */
  name: string;

  /** Description of the event */
  description: string;

  /** Date and time when the event is scheduled */
  scheduleAt: string;

  /**
   * Creates a new Event instance
   * @param event - Initial event properties
   */
  constructor(event: {id?: number, name?: string, description?: string, scheduleAt?: string}) {
    this.id = event.id || 0;
    this.name = event.name || '';
    this.description = event.description || '';
    this.scheduleAt = event.scheduleAt || '';
  }
}
