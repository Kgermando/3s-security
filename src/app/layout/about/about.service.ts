import { Injectable } from '@angular/core'; 
import { ApiService } from '../../shared/services/api.service';
import { environment } from '../../../environments/environment';

/**
 * Defines an intermediate layer to collect 'about' page data
 * (rendered as JSON)
 */
@Injectable({
  providedIn: 'root'
})
export class AboutService extends ApiService {
  endpoint: string = `${environment.apiUrl}/abouts`; 

 
}
