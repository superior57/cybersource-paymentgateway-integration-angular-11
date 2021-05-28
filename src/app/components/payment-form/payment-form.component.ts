import { Component, OnInit } from '@angular/core';
import { PaymentForm } from 'src/app/models/payment-form.model';
import { PaymentFormService } from 'src/app/services/payment-form.service';

const baseUrl = 'http://localhost:8003/api';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent implements OnInit {

  paymentDetails: any = {
    access_key: 'db4b4b4ef86f3a36b6409761bbc2215e',
    profile_id: '96BA0C0B-2F36-42E0-BF31-C01C848AD21E',
    transaction_uuid: '',
    customer_ip_address: '',
    merchant_defined_data1: 'WC',
    signed_field_names: 'access_key,profile_id,transaction_uuid,customer_ip_address,merchant_defined_data1,signed_field_names,unsigned_field_names,signed_date_time,locale,transaction_type,reference_number,amount,currency',
    unsigned_field_names: '',
    signed_date_time: '',
    locale: 'en',
    transaction_type: 'sale',
    reference_number: '',
    amount: '',
    currency: 'QAR',
    signature: ''
  };

  keys = Object.keys(this.paymentDetails);

  constructor(private apiService: PaymentFormService) { }

  ngOnInit(): void {
    this.initialData();

  }

  initialData(): void {
    this.paymentDetails.reference_number = String(new Date().getTime());
    this.apiService.getInitialData()
      .subscribe(
        data => {
          this.paymentDetails = {
            ...this.paymentDetails,
            ...data
          };
          this.getSinature();
        },
        error => {
          console.log(error);
        }
      );
  }

  getSinature(): void {
    this.apiService.getSignature(this.paymentDetails)
      .subscribe(
        data => {
          this.paymentDetails = {
            ...this.paymentDetails,
            ...data
          };
        },
        error => {
          console.log(error);
        }
    );
  }

  submitPaymentForm(event: Event): void {
    document.forms[0].submit();
  }


}
