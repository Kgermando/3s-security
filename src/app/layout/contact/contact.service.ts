import { Injectable } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ContactService extends ApiService {
  endpoint: string = `${environment.apiUrl}/smaco/contacts`; 

  sendMail(data: any): Observable<any> {
    return this.http.post(`${this.endpoint}/send-mail`, data);
  }
}
