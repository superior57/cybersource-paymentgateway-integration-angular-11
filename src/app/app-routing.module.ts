import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentFormComponent } from './components/payment-form/payment-form.component';
import { PaymentResponseComponent } from './components/payment-response/payment-response.component';

const routes: Routes = [
  { path: '', redirectTo: 'payment-form', pathMatch: 'full' },
  { path: 'payment-form', component: PaymentFormComponent },
  { path: 'payment-response', component: PaymentResponseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
