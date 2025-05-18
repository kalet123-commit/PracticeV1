import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service"
import {Rating} from '../model/rating.entity';
import {environment} from '../../../environments/environment'

const ratingsResourceEndpointPath = environment.ratingsEndpointPath
@Injectable({
  providedIn: 'root'
})
export class RatingApiService extends BaseService<Rating>  {


  constructor() {
    super();
    this.resourceEndpoint = ratingsResourceEndpointPath;
  }
}


