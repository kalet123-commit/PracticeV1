import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service"
import {Attendee} from '../model/attendee.entity';
import {environment} from '../../../environments/environment'


const attendeesResourceEndpointPath= environment.attendeesEndpointPath
@Injectable({
  providedIn: 'root'
})
export class AttendeeApiService extends BaseService<Attendee> {

  constructor() {
    super();
    this.resourceEndpoint = attendeesResourceEndpointPath;
  }
}


