import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentFormComponent } from './components/payment-form/payment-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'payment-form', pathMatch: 'full' },
  { path: 'payment-form', component: PaymentFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
