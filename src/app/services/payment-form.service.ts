import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PaymentForm } from '../models/payment-form.model';

const baseUrl = 'http://localhost:8003/api';

@Injectable({
  providedIn: 'root'
})
export class PaymentFormService {

  constructor(private http: HttpClient) { }

  getInitialData(): Observable<PaymentForm> {
    return this.http.get<PaymentForm>(baseUrl + '/client-info.php');
  }
  getSignature(params: any): Observable<any> {    
    return this.http.get<any>(baseUrl + '/signature.php', {params});
  }
}
