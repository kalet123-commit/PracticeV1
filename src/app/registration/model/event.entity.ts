export class Event {

  id:number;
  name:string;
  description:string;
  scheduleAt:string;

constructor(event:{id?:number,name?:string,description?:string,scheduleAt?:string}){
  this.id = event.id || 0;
  this.name = event.name || '';
  this.description = event.description || '';
  this.scheduleAt = event.scheduleAt || '';
  }
}
