import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LogoApiService {
  baseUrl = environment.logoProviderApiBaseUrl;

  constructor() {}

  getLogoUrl(domain:string):string {
    return `${environment.logoProviderApiBaseUrl}/${domain}`;

  }
}
