import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment-response',
  templateUrl: './payment-response.component.html',
  styleUrls: ['./payment-response.component.css']
})
export class PaymentResponseComponent implements OnInit {

  data: any = {};

  constructor(private route: ActivatedRoute) { }  

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.data = {
        ...params
      };
      console.log(this.data);
    });
  }

}
