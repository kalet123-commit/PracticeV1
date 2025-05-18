export class Attendee {

  id:number;
  firstName:string;
  lastName:string;
  eventId:number;
  ticketIdentifier:number;
  checkedInAt:string;

  constructor(attendee:{id?:number, firstName?:string, lastName?:string,eventId?:number,ticketIdentifier?:number,checkedInAt?:string}) {
    this.id=attendee.id ||0;
    this.firstName=attendee.firstName || '';
    this.lastName=attendee.lastName || '';
    this.eventId=attendee.eventId || 0;
    this.ticketIdentifier=attendee.ticketIdentifier || 0;
    this.checkedInAt=attendee.checkedInAt || '';
  }
}

